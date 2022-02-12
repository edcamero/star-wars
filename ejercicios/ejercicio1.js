for(i=0;i<=100;i++){
    if(i%2==0){
        console.log(`buzz ${i}`)
        continue
    }
    if(i%5==0){
        console.log(`bazz ${i}`)
        continue
    }
    console.log(i)
}