import PageTitle from "../../PageTitle";
import User from "../../User";
import Footer from "../../Footer";

const App = () => {
  const pagetitle = "Welcome to My App";
  
  const userList= [
    {
      name: "Alice",
      age:25
    },
    {
      name:"Bob",
      age:30
    },
    {
      name:"Charlie",
      age:35
    }
  ];
  
  const footerText = "© 2023 My App";

  return (
    <div>
      <PageTitle title= {pagetitle}/>
      <User users={userList} />
      <Footer text={footerText} />
    </div>
  );
};

export default App;
