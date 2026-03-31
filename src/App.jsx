import Address from "./components/Address";
import Birthday from "./components/Birthday";
import Button from "./components/Button";
import City from "./components/City";
import Country from "./components/Country";
import Course from "./components/Course";
import Email from "./components/Email";
import FirstName from "./components/FirstName";
import Gender from "./components/Gender";
import Heading from "./components/Heading";
import Hobbies from "./components/Hobbies";
import LastName from "./components/LastName";
import Mobile from "./components/Mobile";
import Pincode from "./components/Pincode";
import Qualification from "./components/Qualification";
import State from "./components/State";
import Structure from "./components/Structure";
import Title from "./components/Title";

export default function App(){
  return(
    <>
    <Title/>
    <Heading/>
    <div>
      <Structure/>
      <FirstName/>
      <LastName/>
      <Birthday/>
      <Email/>
      <Mobile/>
      <Gender/>
      <Address/>
      <City/>
      <Pincode/>
      <State/>
      <Country/>
      <Hobbies/> 
      <Qualification/> 
       <Course/>
       <Button/>
      
    </div>
    </>
  );
}