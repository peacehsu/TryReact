import Header from './components/Header'
import BottomNav from './components/BottomNav'

function ChatBox({image,message,right}){
  const elements =[
    <div>
      <img className = "rounded-full w-48" src={image} alt="lorem"/>
    </div>,
    <p className="bg-gray-200 p-4 rounded-lg">{message}</p>
  ];

  return(
    <div className="flex space-x-4">
      { right ? elements.reverse() : elements }
    </div>
  )
}

function ChatRoom(){
  const messages = [
    {
    image:"https://picsum.photos/seed/picsum/200",
    message:"Lorem ipsum dolor sitamet, consectetur adipiscing elit. Nunc porttitor gravida venenatis. Duis vel lorem non enim pharetra venenatis et vitae lorem. Praesent euismod nunc porta, aliquet elit ac, gravida sapien"
    },
    {
    image:"https://picsum.photos/seed/picsum/200",
    message:"Lorem ipsum dolor sitamet, consectetur adipiscing elit. Nunc porttitor gravida venenatis. Duis vel lorem non enim pharetra venenatis et vitae lorem. Praesent euismod nunc porta, aliquet elit ac, gravida sapien"
    },
    {
    image:"https://picsum.photos/seed/picsum/200",
    message:"Lorem ipsum dolor sitamet, consectetur adipiscing elit. Nunc porttitor gravida venenatis. Duis vel lorem non enim pharetra venenatis et vitae lorem. Praesent euismod nunc porta, aliquet elit ac, gravida sapien"
    },
    {
    image:"https://picsum.photos/seed/picsum/200",
    message:"Lorem ipsum dolor sitamet, consectetur adipiscing elit. Nunc porttitor gravida venenatis. Duis vel lorem non enim pharetra venenatis et vitae lorem. Praesent euismod nunc porta, aliquet elit ac, gravida sapien"
    },
    
];

  return(
    <div className="px-4 py-4 space-y-8">
      {
        messages.map((msg,index)=>(
          <ChatBox image={msg.image} message={msg.message} right={index % 2}/>
        ))
      }

    </div>
  )
}

function App() {
  return (
    <div >
      <Header title="James" canBack/>

      <ChatRoom />

      <BottomNav /> 
    </div>
  );
}

export default App;
