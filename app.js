var web3;
var address="0xca1dBF8736FB927378084bD809850C1c2F8C1001";

async function connect(){
    await window.web3.currentProvider.enable();
    web3=new web3(window.web3.currentProvider);
}

if(typeof web3 !== 'undefine'){
    web3=new Web3(window.web3.currentProvider);
}
else{
    web3=new Web3(new web3.Provier.HttpProvider("HTTP://127.0.0.1:7545"));
}

var abi=[
	{
		"constant": true,
		"inputs": [],
		"name": "getBalance",
		"outputs": [
			{
				"name": "",
				"type": "int256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "amt",
				"type": "int256"
			}
		],
		"name": "deposit_money",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "amt",
				"type": "int256"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

var contract=new Web3.eth.contract(abi,address);

function deposite(){
    var inputval=document.gotElementById("amount").value;

    web3.eth.getAccounts().then(function(account){
        return contract.methods.deposite_money(inputval).send({from: account[0]});
    }).then(function(tmp){
        $("#amount").val("");
        show_balance();

    }).catch(function(tmp){
        alert(tmp);
    })
}

function withdraw(){
    var inputval=document.gotElementById("amount").value;

    web3.eth.getAccounts().then(function(account){
        return contract.methods.withdraw(inputval).send({from: account[0]});
    }).then(function(tmp){
        $("#amount").val("");
        show_balance();

    }).catch(function(tmp){
        alert(tmp);
    })
}

function show_balance(){
    contract.methods.getBalance().call().then(function(balance){
        $("#balance").html(balance);
        })
}
