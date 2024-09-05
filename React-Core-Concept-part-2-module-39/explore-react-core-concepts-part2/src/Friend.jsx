// ekhane jei Friend component theke props ta ashce amra jani je props dile object akare ashbe so ekhane shei friend namok object takei nicchi evabe {friend}
export default function Friend({ friend }) {
  //   console.log(friend);
  // jeheto eta object er moddhe ache tahole chaile ami ekhane destructuring korte pari
  const { name, email } = friend;

  // amra Friends.css take import ei file e korini tobe ei file eo Friends.css ta kaj korbe karon overall compile hoye gele css take tara pacche arki dhoro ekta component e jodi add kora hoi by default paoa jai tumi jodi arekta componet e na dekhaite chao tahole oitake tumi stop koraite paro seta alada akta system
  return (
    <div className="box">
      <h4>name: {name} </h4>
      <p>email: {email}</p>
    </div>
  );
}
