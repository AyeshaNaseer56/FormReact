import Heading from "./components/Heading";
import Name from "./components/Name";
import LastName from "./components/LastName";
import Birth from "./components/Birth";
import Date from "./components/Date";
import Email from "./components/Email";
import Mobile from "./components/Mobile";
import Gender from "./components/Gender";
import Address from "./components/Address";
import City from "./components/City";
import Pin from "./components/Pin";
import State from "./components/State";
import Country from "./components/Country";
import Hobbies from "./components/Hobbies";
import Others from "./components/Others";
import Qualification from "./components/Qualification";
import One from "./components/One";
import Two from "./components/Two";
import Three from "./components/Three";
import Masters from "./components/Masters";
import Caption from "./components/Caption";
import Courses from "./components/Courses";
import Applied from "./components/Applied";
import Submit from "./components/Submit";


export default function App(){
  return(
    <>
  <Heading />
  <form >
    <table>
        <Name />
        <LastName />
        
       <tr>
        <Birth />
       <Date />
       </tr> 
        <Email />
        <Mobile />
        <Gender />
        <Address />
        <City />
        <Pin />
        <State />
        <Country />
        <Hobbies />
        <Others />
         </table>

    <table class="borderline" >
        <Qualification />
        <One />
        <Two />
        <Three />
        <Masters />
        <Caption />

    </table>
    <table>
      <Courses />
      <Applied />
    </table>
    <table>
     
      <Submit />

    


    </table>

   

  </form>

    </>
  );
};
