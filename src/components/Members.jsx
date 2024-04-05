import MembersModal from "./MembersModal"

const Members = () => {
  return (
    <section id="member">
      <h1 className="flex justify-center items-center text-5xl font-bold">Members</h1>
      <div className="flex flex-wrap justify-items-center bg-gray-200">
        <div className="w-1/3 grid place-items-center justify-center items-center mt-4">
          <div>
            <img id="member1" src='img/members/maya.jpg' onClick={()=>
              document.getElementById("membersModal1").showModal()} className="max-w-sm h-auto"/>
          </div>
          <div>
            <p className="text-center font-bold">Maya Rotenberg</p>
          </div>
        </div>
        <div className="w-1/3 grid place-items-center justify-center items-center mt-4">
          <div>
            <img id="member2" src='img/members/amanda.jpg' onClick={()=>
              document.getElementById("membersModal2").showModal()} className="max-w-sm h-auto"/>
          </div>
          <div>
            <p className="text-center font-bold">Amanda Sakimura</p>
          </div>
        </div>
        <div className="w-1/3 grid place-items-center justify-center items-center mt-4">
          <div>
            <img id="member3" src='img/members/alex.jpg' onClick={()=>
              document.getElementById("membersModal3").showModal()} className="max-w-sm h-auto"/>
          </div>
          <div>
            <p className="text-center font-bold">Alex Pease</p>
          </div>
        </div>
        <div className="w-full">4</div>
        <div className="w-1/3 grid place-items-center justify-center items-center mt-4">
          <div>
            <img id="member1" src='img/members/bhaskar.jpg' onClick={()=>
              document.getElementById("membersModal4").showModal()} className="max-w-sm h-auto"/>
          </div>
          <div>
            <p className="text-center font-bold">Bhaskar Roberts</p>
          </div>
        </div>
        <div className="w-1/3 grid place-items-center justify-center items-center mt-4">
          <div>
            <img id="member2" src='img/members/ellington.jpg' onClick={()=>
              document.getElementById("membersModal5").showModal()} className="max-w-sm h-auto"/>
          </div>
          <div>
            <p className="text-center font-bold">Ellington Chen</p>
          </div>
        </div>
        <div className="w-1/3 grid place-items-center justify-center items-center mt-4">
          <div>
            <img id="member3" src='img/members/justin.jpg' onClick={()=>
              document.getElementById("membersModal6").showModal()} className="max-w-sm h-auto"/>
          </div>
          <div>
            <p className="text-center font-bold">Justin Wong</p>
          </div>
        </div>
        <div className="w-full">4</div>
        <div className="w-1/3 grid place-items-center justify-center items-center mt-4">
          <div>
            <img id="member1" src='img/members/jerry.jpg' onClick={()=>
              document.getElementById("membersModal7").showModal()} className="max-w-sm h-auto"/>
          </div>
          <div>
            <p className="text-center font-bold">Jerry</p>
          </div>
        </div>
        <div className="w-1/3 grid place-items-center justify-center items-center mt-4">
          <div>
            <img id="member2" src='img/members/athena.jpg' onClick={()=>
              document.getElementById("membersModal8").showModal()} className="max-w-sm h-auto"/>
          </div>
          <div>
            <p className="text-center font-bold">Athena Liu</p>
          </div>
        </div>
        <div className="w-1/3 grid place-items-center justify-center items-center mt-4">
          <div>
            <img id="member3" src='img/members/stephanus.jpg' onClick={()=>
              document.getElementById("membersModal9").showModal()} className="max-w-sm h-auto"/>
          </div>
          <div>
            <p className="text-center font-bold">Stephanus Yang</p>
          </div>
        </div>
        <div className="w-full">4</div>
        <div className="w-1/3 grid place-items-center justify-center items-center mt-4">
          <div>
            <img id="member1" src='img/members/kian.jpg' onClick={()=>
              document.getElementById("membersModal10").showModal()} className="max-w-sm h-auto"/>
          </div>
          <div>
            <p className="text-center font-bold">Kian Chou</p>
          </div>
        </div>
        <div className="w-1/3 grid place-items-center justify-center items-center mt-4">
          <div>
            <img id="member2" src='img/members/eddie.jpg' onClick={()=>
              document.getElementById("membersModal11").showModal()} className="max-w-sm h-auto"/>
          </div>
          <div>
            <p className="text-center font-bold">Eddie Cekici</p>
          </div>
        </div>
        <div className="w-1/3 grid place-items-center justify-center items-center mt-4">
          <div>
            <img id="member3" src='img/members/andrew.jpg' onClick={()=>
              document.getElementById("membersModal12").showModal()} className="max-w-sm h-auto"/>
          </div>
          <div>
            <p className="text-center font-bold">Andrew Tran</p>
          </div>
        </div>
        <div className="w-full">4</div>
        <div className="w-1/3 grid place-items-center justify-center items-center mt-4">
          <div>
            <img id="member1" src='img/members/ethan.jpg' onClick={()=>
              document.getElementById("membersModal13").showModal()} className="max-w-sm h-auto"/>
          </div>
          <div>
            <p className="text-center font-bold">Ethan Jang</p>
          </div>
        </div>
        <div className="w-1/3 grid place-items-center justify-center items-center mt-4">
          <div>
            <img id="member2" src='img/members/tom.jpg' onClick={()=>
              document.getElementById("membersModal14").showModal()} className="max-w-sm h-auto"/>
          </div>
          <div>
            <p className="text-center font-bold">Tom Guan</p>
          </div>
        </div>
        <div className="w-1/3 grid place-items-center justify-center items-center mt-4">
          <div>
            <img id="member3" src='img/members/madlen.jpg' onClick={()=>
              document.getElementById("membersModal15").showModal()} className="max-w-sm h-auto"/>
          </div>
          <div>
            <p className="text-center font-bold">Madlen Jalalyan</p>
          </div>
        </div>
        <div className="w-full">4</div>
        <div className="w-1/3 grid place-items-center justify-center items-center mt-4">
          <div>
            <img id="member1" src='img/members/christopher.jpg' onClick={()=>
              document.getElementById("membersModal16").showModal()} className="max-w-sm h-auto"/>
          </div>
          <div>
            <p className="text-center font-bold">Christopher Yuan</p>
          </div>
        </div>
      </div>
      <MembersModal memberId="1"/>
      <MembersModal memberId="2"/>
      <MembersModal memberId="3"/>
      <MembersModal memberId="4"/>
      <MembersModal memberId="5"/>
      <MembersModal memberId="6"/>
      <MembersModal memberId="7"/>
      <MembersModal memberId="8"/>
      <MembersModal memberId="9"/>
      <MembersModal memberId="10"/>
      <MembersModal memberId="11"/>
      <MembersModal memberId="12"/>
      <MembersModal memberId="13"/>
      <MembersModal memberId="14"/>
      <MembersModal memberId="15"/>
      <MembersModal memberId="16"/>
    </section>
  );
  /*
  function showModal({Id}){
      let member=document.getElementById("member"+{Id});
      let Modal=document.getElementById("memberModal"+{Id});
      Modal.style.display="block";
      window.onClick=function(event){
        if(event.target==Modal){
          Modal.style.display="none";
        }
      }
  }*/
};

export default Members;
