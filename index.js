const numberCardInput = document.getElementById("cardNumber");
numberCardInput.addEventListener("input", () => {
  const stringToMask = Array.from(numberCardInput.value);
  if(stringToMask.length < 17){
  let numberToPrint = Array.from({ length: stringToMask.length }, (v, k) => {
        if (k < 12) {
            if ((k + 1) % 4 === 0) {
              return "*" + " ";
            } else {
              return "*";
            }
          } else return stringToMask[k];
  });
  document.getElementById("cardNumberPrint").textContent =
    numberToPrint.join("");
}
});

const cardDateExpiredInput = document.getElementById("cardExpiredDate");
cardDateExpiredInput.addEventListener("input", ()=>{
    if(cardDateExpiredInput.value.length < 5){
        document.getElementById("cardNumberExpDate").textContent = cardDateExpiredInput.value;
    }
})
