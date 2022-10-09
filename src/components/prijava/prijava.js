import React from 'react'
import './prijava.css';


const PrijavaBox = (props) => {
  return (
    <div class="prijavaboxborder gradijentborder">
    <div class="prijavabox">
    {props.children}
    </div>
    </div>
  )
}

const PrijavaTitle = (props) => {
  return (
    <p class="prijavatitle">{props.children}</p>
  )
}

const PrijavaText = (props) => {
  return (
    <p class="prijavatext">{props.children}</p>
  )
}

const PrijavaButton = (props) => {
  return (
    <div class="prijavaborder gradijentborder">
    <button class="prijavabutton gradijentcontent">
      {props.children}
    </button> 
    </div>
  )
}

const Prijava = () => {
  return (

    <div class="prijava">
    <PrijavaBox>
        <PrijavaTitle>
          Čekamo tvoju prijavu!
        </PrijavaTitle>
        <PrijavaText>
          Hakaton za srednjoškolce je jedinstvena prilika da se susretneš sa IT-jem i programiranjem na drugačiji način nego na časovima u školi. Bićeš iznenađen šta sve možeš da postigneš za samo 24 sata i koliki napredak možeš da ostvariš zajedno sa svojim timom. Zato ne čekaj, već popuni formu na sajtu i postani deo Hakatona za srednjoškolce 4.0!
        </PrijavaText>
    </PrijavaBox>
    <PrijavaButton>
      PRIJAVI SE
    </PrijavaButton>
    </div>
    
  )
}

export default Prijava