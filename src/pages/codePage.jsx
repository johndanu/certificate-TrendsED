import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodePage() {
  const pythonCode = `
isrepecting=True
savedpin=1234
account_balance=500000
isrepecting=True:

while isrepecting:
    print('welcome to abc bank')
    print('please enter your card...')

    language=input('please select the language: ENGLISH  TAMIL  SINKALAM :')

    is_getting_reciept=input('do you want a reciept for this transcation? y/n : ')


    print('enter you pin number...: ')
    pin=int(input())

    if savedpin==pin:
        print('pin accepted')
        print('1-withdrawal\n' '2-deposit\n' '3-balance inquiry\n' '4-transfer')
        option=input()
        input('select type of account: current account , saving account: ')
     
        if option == '1':
            print("enter amount in rupees. it's less thaan " + str( account_balance))
            withdrawalAmount = int(input())

            if withdrawalAmount < account_balance:
                print('please waiting for getting cash.')
                balance = account_balance - withdrawalAmount
                if is_getting_reciept.lower() == 'y':
                    print('please get the reciept.')
                else:
                    print('\n')
            else:
                print('insufficient balance')
        
        elif option =='2':
            depositAmount=int(input('enter the amount to deposited: '))
            print('Amount is successfully deposit.')
            balance= account_balance + depositAmount
            if is_getting_reciept.lower() == 'y':
                print('please get the reciept.')
            else:
                print('\n')

        elif option == '3':
            print('your acount balance is '+str(account_balance))
            if is_getting_reciept.lower() == 'y':
                print('please get the reciept.')
            else:
                print('\n')

        elif option == '4':
            transferAmount=int(input('enter the amount to transfer amount: '))
            if transferAmount < account_balance :
                print('Amount is successfully transfered.')
                balance= account_balance + transferAmount
                if is_getting_reciept.lower() == 'y':
                    print('please get the reciept.')
                else:
                    print('\n') 
            else:
                print('insufficient balance')

    else:
        print('your pin number is wrong.')
        
    print('please get your card.')
    print('Thanks you and come again.')
    print('\n')
     
`;
  const language = "python";
  return (
    <div className="container">
      <div className="card my-3">
        <div className="card-header">ATM Machine Clone</div>
        <div className="card-body">
          <div
            style={{
              backgroundColor: "#1e1e1e",
              borderRadius: "5px",
              color: "#ffffff",
              minHeight: "100vh",
            }}
          >
            <div
              style={{
                backgroundColor: "#111111",
                borderRadius: "5px",
              }}
              className="d-flex justify-content-between text-info px-2 py-1"
            >
              <span>python</span>
              <span>Assignment1</span>
            </div>
            <SyntaxHighlighter
              language={language.toLowerCase()}
              style={vscDarkPlus}
            >
              {pythonCode}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
}
