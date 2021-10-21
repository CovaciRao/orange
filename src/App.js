import './App.css';
import FormControl from './FormControl/FormControl';
import UserForm from './UserForm/UserForm';


function App() {
  const types = ['text','email','password','password','textarea','radio'];
  const name = ['Username','Email','Password','Confirm Password', 'Motto', 'User personalized'];
  
  const TheProfile = {
    username: 'Rara',
    email: 'Rara@test.com',
    motto: 'Rarararararrarararara',
    personalized: true,
  }

  return (
    <div className="App">
      <div className="forms">
        {/* <UserForm 
        formType={name} 
        formFor={types} 
        formId={types}
        formName={types}
        title="Registrer"
        register={true} 
        buttonTheme="button"
        buttonType="submit"
        buttonLabel="Register"
        />
        <UserForm formType={name} 
        formFor={types} 
        formId={types} 
        formName={types} 
        title="Edit Profile" 
        register={false} 
        buttonTheme="button"
        buttonType="submit"
        buttonLabel="Update"
        /> */}

        <UserForm
          title="Register"
          buttonTheme="button"
          buttonType="submit"
          buttonLabel="Register"
        >
          <FormControl type="text" label="Username" for="text" name="username" id="username" />
          <FormControl type="email" label="Email" for="email" name="email" id="email" />
          <FormControl type="password" label="Password" for="password" name="password" id="password" />
          <FormControl type="password" label="Confirm Password" for="password" name="confirmPassword" id="confirmPassword" />
          <FormControl type="textarea" label="Motto" for="textarea" name="motto" id="motto" />
          <FormControl type="radio" label="User personalized" for="radio" name="userPersonalized" id="userPersonalized" />
        </UserForm>
        <UserForm       
          title="Edit Profile"  
          buttonTheme="button"
          buttonType="submit"
          buttonLabel="Update"
        >
          <FormControl label="Username" type="text" name="username" id="username" value={TheProfile.username}/>
          <FormControl label="Email" type="email" name="email" id="email" value={TheProfile.email}/>
          <FormControl label="Motto" type="textarea" name="motto" id="motto" value={TheProfile.motto}/>
          <FormControl label="User personalized" type="radio" name="userPersonalized" id="userPersonalized" isChecked={true}/>
        </UserForm>
      </div>

    </div>
  );
}

export default App;
