// local storage ebong session storage duita 100% same vabei kaj kore tobe tui kokhon thakbe kokhon chole jabe sheita parthokko sdho.
// Local storage er store krito data ei browser e thekei jabe alltime pc off korleo thakbe ba onno kono tab e geleo thakbe joto din browser thake arki.
// Session storage er store krito data browser er onno tabe e gele chole jabe ba onno website e geleo chole jabe abong pc off korleo chole jabe.
// Local storage ar Session storage value set kora update kora duitari same vabei hoi

/* 
localStorage.clear();
localStorage.getItem();
localStorage.key();
localStorage.length();
localStorage.removeItem();
localStorage.setItem();
 */

localStorage.setItem("userId", 87952214); // localStorage add hobe

const addToLocalStorage = () => {
  const idInput = document.getElementById("storage-id");
  const id = idInput.value;
  const valueInput = document.getElementById("storage-value");
  const value = valueInput.value;

  //
  if (id && value) {
    // duitai truthy hote hobe tahole hobe orthat id abong value duitai thakte hobe
    localStorage.setItem(id, value);
  }
  // localStorage.setItem(id, value); // sodho eta thakle truty ebong falsy duitai dibe emtry string o dibe orthat faka thakbe ba je jeta dibo sheta pabo shodho id dile id pabo shodho value dile value pabo
  idInput.value = "";
  valueInput.value = "";
};

// amra chaile array ba object keo dekhate pari

// summary:
// local Storage e jodi normally array othoba object set korte chai tahole sheta object ba array er moton kore set hobe na
// thik temoni jodi normally  array othoba object get korte chai tahole sheta object ba array er moton kore set hobe na

// ar tai ei problem dor korar jonno nicher duita line onojayi korte hobe stringify ebong parse opnjayi.
// local Storage e jodi set korte chai object othoba array tahole JSON.stringify kore set korte hobe.
// local Storage e jodi get korte chai orthat pete chai tahole JSON.parse kore nite hobe.

// orthat local storage e kono kicho ke pathaite chaile stringify kore nibo
// ar pete chaile parse kore nibo.
