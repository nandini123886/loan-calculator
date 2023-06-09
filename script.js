window.onload=()=>{
  const input=  document.querySelectorAll('input');
  input.forEach(input=>{
        input.addEventListener('change',CalculateLoan)
  })

}
function CalculateLoan ()  {
    const principal= document.querySelector('#amount').value;
    const interest= document.querySelector('#rate').value;
    const tenure= document.querySelector('#tenure').value;
    if(!principal||!interest||!tenure){
        return;
    }
    const monthlyInterest=interest/100/12;
    const emi=principal*monthlyInterest*Math.pow(1+monthlyInterest,tenure)/(Math.pow(1+monthlyInterest,tenure))-1;
    const totalAmount=emi*tenure;
    const totalInterest=totalAmount-principal;
    
  document.querySelector('#emi').innerText='EMI: ₹'+emi.toFixed(2);
  document.querySelector('#totalamout').innerText='Total Amount: ₹'+totalAmount.toFixed(2);
  document.querySelector('#interest').innerText='Interest: ₹'+totalInterest.toFixed(2);

}