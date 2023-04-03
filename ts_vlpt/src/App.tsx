import Greetings from './Greetings'
// import Counter from './Counter'

function App() {
  const onClick = (name: string) => {
    console.log(`Hi ${name}`)
  }
  return <Greetings name="Hello" onClick={onClick} />
  //   return <Counter />
}

export default App
