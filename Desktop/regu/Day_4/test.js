const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo =() => {
    console.log('f oo')
    setTimeout(bar,0)
    new Promise((resolve,rejeect) =>
    resolve('should be after baz be4 bar')
    ).then (resolve => console.log(resolve))
    baz()
}

foo()


//____________________________________________________________________________________
