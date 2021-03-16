---
layout: post
title: Svelte, el lenguaje de programación
---


# Svelte, el lenguaje de programación.

Seguramente han escuchado de frameworks y librerias como Angular, Ember, React, Vue. Frameworks y librerias sobre JS para poder desarollar applicaciones web de una manera mucho más sencilla que con vanilla js.

Yo personalmente, día a día, desarollo en React Js y cubre perfectamente todas mis necesidades.

Sin embargo, seamos sinceros, React puede ser muy complejo, tiene una curva de aprendizaje que puede llegar a ser tediosa, aparte, que necesitas conocimiento fuertesito de JS, y bueno, React no es un lenguaje...

## Ready steady go!

Sin necesidad de saber mucho sobre JS, svelte esta listo para poder empezar, de una, proyectos de aplicaciones web que tienes en tu cabeza.

Si tienes experiencia, podrás ir aprendiendo Svelte sobre la marcha mientras estñas haciendo tu aplicación; y si no la tienes, **También**.

## Ejemplo de porque es increible.

```
<script>
	let email = "";
	let password = "";
	
	function login(email, password){
		// una llamada a la api
		console.log(email, password)
	}
</script>

<input type="email" bind:value={email}>
<input type="password" bind:value={password}>
<button on:click={() => login(email, password)}>
	Enviar
</button>
```

Como se puede ver, en pocas lineas tienes un formulario básico. (Claro faltan validaciones y todo eso) El ejemplo ilustra lo fácil que puede llegar a ser describir interfaces de usuario con svelte. 

**Meterle JS en nada**

Así es, simplemente pones allí tus elementos html y dentro del tag de `<script>` el js que va a interactura con ellos. Seguramente notas cosas familiares como `on:click`, `bind:value`.

**Rápido**

Sin tanto boilerplate. Tienes tu formulario.

Por ejemplo, en React, este mismo form sería algo así

```
import React, { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (email, password) => {
    // api
    console.log(email, password);
  };

  return (
    <div className="App">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => login(email, password)}>Enviar</button>
    </div>
  );
}
```

No me malentiendan, me gusta React. Es el que me da de comer. Sin embargo, tenemos que admitirlo, el codigo de svelte resulta más limpio, más fácil de leer tanto si eres nuevo, o un experimentado.


---

Muchas gracias por leerme, estaré publicando más sobre React y Svelte. 






