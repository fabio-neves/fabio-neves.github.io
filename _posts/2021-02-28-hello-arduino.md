---
layout: post
title:  "Hello Arduino!"
date:   2021-02-28
permalink: "/2021/05/hello-arduino.html"
comments: true
categories: welcome
---
Tudo começou quando eu resolvi comprar uma caixa de som dessas com bluetooth para colocar na minha sala.
Após um pouco de pesquisa, vi que valeria mais a pena comprar uma caixa de som com um assistente virtual.
Resumindo essa história, eu comprei um amazon echo 3º geração pois tinha um som legal e ainda vinha com a tal Alexa.
Foi nesse momento que caiu a ficha para mim sobre uma mudança que está acontecendo nesse exato momento. A Internet das coisas.

Com isso, eu resgatei a vontade de criar algo usando esses microcontroladores super fáceis de usar e programar. Escolhi o [Arduino][arduino-hp]{:target="_blank"}.

Um projeto que eu achei que poderia funcionar seria capturar dados sobre a humidade, temperatura e claridade da minha horta. 
Se possível também controlar a irrigação. Quero que as informações fiquem num banco de dados e sejam consultadas e controladas
através de uma interface web. Além disso, meu circuito precisa ser independente. Não pode depender de tomada e nem de cabo para conexão de dados.
A ideia é que ele seja alimentado por pilhas comuns e tenha uma conexão através da wifi da minha casa. O banco de dados e a aplicação web irão ficar no meu computador.
Mas antes disso tudo acontecer, pera lá, preciso começar por onde todo o programador começa... Pelo famoso Hello World!

[Meu Primeiro Exemplo][blink-src]{:target="_blank"}
```CPP
// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(LED_BUILTIN, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {
  digitalWrite(LED_BUILTIN, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(5000);                       // wait for a second
  digitalWrite(LED_BUILTIN, LOW);    // turn the LED off by making the voltage LOW
  delay(5000);                       // wait for a second
}
```
<div style="display:flex; justify-content: center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/VOjqhL0M8nI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Existe uma outra motivação para mexer com Arduino. A sua programação é feita com a linguagem C++. Dessa forma é uma boa desculpa para relembrar ou aprender essa linguagem de programação e valorizar tudo que existe nas linguagens mais modernas.

[arduino-hp]: https://www.arduino.cc/
[blink-src]: http://www.arduino.cc/en/Tutorial/Blink