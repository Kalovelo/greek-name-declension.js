# greek-name-declension

No longer refer to greek users with the wrong name declension. Greet your users with 🇬🇷 **filotimo** , 🇬🇷 **meraki** and their correct ***name form***.

```javascript
const { getDeclension } = require( "greek-name-declension");


console.log(getDeclension("Γιώργος"));

/*
{
  nominative: 'Γιώργος',
  possesive: 'Γιώργου',
  accusative: 'Γιώργο',
  vocative: 'Γιώργο'
}
*/
```

## Supports

### Capitalization 👌
```javascript
console.log(getDeclension("Αγαμέμνων"));
/*
{
  nominative: "Αγαμέμνων",
  possesive: "Αγαμέμνονος",
  accusative: "Αγαμέμνονα",
  vocative: "Αγαμέμνων",
}
*/
```

### lowercase 👍
```javascript
console.log(getDeclension("κούλα"));
/*
{
  nominative: "κούλα",
  possesive: "κούλας",
  accusative: "κούλα",
  vocative: "κούλα",
}
*/
```

### UPPERCASE 🤏
```javascript
console.log(getDeclension("ΒΑΓΓΕΛΑΣ"));
/*
{
  nominative: "ΒΑΓΓΕΛΑΣ",
  possesive: "ΒΑΓΓΕΛΑ",
  accusative: "ΒΑΓΓΕΛΑ",
  vocative: "ΒΑΓΓΕΛΑ",
}
*/
```

### WITHOUT INTONATION ✌️
```javascript
console.log(getDeclension("Δημητρης"));
/*
{
  nominative: "Δημητρης",
  possesive: "Δημητρη",
  accusative: "Δημητρη",
  vocative: "Δημητρη",
}
*/
```
### ΝΟ DECLENSION? NO PROBLEM 👐
```javascript
console.log(getDeclension("Δαβίδ"));
/*
{
  nominative: "Δαβίδ",
  possesive: "Δαβίδ",
  accusative: "Δαβίδ",
  vocative: "Δαβίδ",
}
*/
```

