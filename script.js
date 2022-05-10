//nilai random computer
function getPilihanComputer(){
	  const comp = Math.random();

    if( comp < 0.34 ) return 'gajah';
    if( comp >= 0.34 && comp < 0.67 ) return 'orang';
        return 'semut';
}
//akhir dari random computer
//nilai hasil komputer
function getHasil(comp,player){

    if( player == comp ) return 'SERI!';
    if( player == 'gajah' ) return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
    if( player == 'orang' ) return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
    if( player == 'semut' ) return ( comp == 'orang' ) ? 'KALAH' : 'MENANG!';
}
//akhir dari hasil komputer

//memutar 
function putar(){
	const imgComputer=document.querySelector(".img-komputer")
	const gambar =['gajah','semut','orang'];
	let i=0;
	const waktuMulai =new Date().getTime()
	setInterval(function(){
		if(new Date().getTime() - waktuMulai > 1000){
			clearInterval;
			return;
		}
        imgComputer.setAttribute("src","img-suwit-jawa/img/"+gambar[i++]+".png")
        if(i==gambar.length)i=0;          
 
	}, 100)
}

//akhir memutar
//mengunakan cara yang lebih rumit
const kelasIndex=document.querySelectorAll("li img")
kelasIndex.forEach(function(kelas){
   
   kelas.addEventListener("click",function(){

const pilihanComputer=getPilihanComputer()
	     const pilihanPlayer=kelas.className
	     const hasil=getHasil(pilihanComputer,pilihanPlayer)
	     
   putar();
setTimeout(function(){
	const imgKomputer =document.querySelector(".img-komputer")
	imgKomputer.setAttribute("src","img-suwit-jawa/img/"+pilihanComputer+".png")


	const info= document.querySelector(".info")
	info.innerHTML=hasil

},1000);
	
    
    
   })
})

//akhir dari cara yang disarankan



//cara ini kurang efektif

// const pGajah=document.querySelector(".gajah")
// pGajah.addEventListener("click",function(){

//      const pilihanComputer=getPilihanComputer()
//      const pilihanPlayer=pGajah.className
//      const hasil=getHasil(pilihanComputer,pilihanPlayer)
     


// const imgKomputer =document.querySelector(".img-komputer")
// imgKomputer.setAttribute("src","img-suwit-jawa/img/"+pilihanComputer+".png")


// const info= document.querySelector(".info")
// info.innerHTML=hasil
// })


// const pOrang=document.querySelector(".orang")
// pOrang.addEventListener("click",function(){

//      const pilihanComputer=getPilihanComputer()
//      const pilihanPlayer=pOrang.className
//      const hasil=getHasil(pilihanComputer,pilihanPlayer)
   


// const imgKomputer =document.querySelector(".img-komputer")
// imgKomputer.setAttribute("src","img-suwit-jawa/img/"+pilihanComputer+".png")


// const info= document.querySelector(".info")
// info.innerHTML=hasil

// })

// const pSemut=document.querySelector(".semut")
// pSemut.addEventListener("click",function(){

//      const pilihanComputer=getPilihanComputer()
//      const pilihanPlayer=pSemut.className
//      const hasil=getHasil(pilihanComputer,pilihanPlayer)
   


// const imgKomputer =document.querySelector(".img-komputer")
// imgKomputer.setAttribute("src","img-suwit-jawa/img/"+pilihanComputer+".png")

// const info= document.querySelector(".info")
// info.innerHTML=hasil

// })





//pr tambahkan nilai