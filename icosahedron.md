<div class="solid">
  <div class="side"></div>
  <div class="side"></div>
  <div class="side"></div>
  <div class="side"></div>
  <div class="side"></div>

  <div class="side"></div>
  <div class="side"></div>
  <div class="side"></div>
  <div class="side"></div>
  <div class="side"></div>

  <div class="side"></div>
  <div class="side"></div>
  <div class="side"></div>
  <div class="side"></div>
  <div class="side"></div>

  <div class="side"></div>
  <div class="side"></div>
  <div class="side"></div>
  <div class="side"></div>
  <div class="side"></div>
</div>

$triwidth: 100px;

$sqrt3: 1.732;
$tilt: 52.62deg; // asin(tan(54deg)/sqrt(3))
$capheight: -1.051 * $triwidth; // sqrt(3-tan(54deg) ^2 ) 
$triheight: $triwidth * $sqrt3;
$vshift: $capheight + $triheight / 2;

$innerradius: 1.376 * $triwidth; // tan(54deg)
$outerradius: 1.701 * $triwidth; // 1/cos(54deg)
$sidetilt: 10.81deg; // asin( (sec(54deg)-tan(54deg))/sqrt(3) )
$sideheight: $outerradius; // !!! sqrt(3-(sec(54deg)-tan(54deg))^2)
$vshift2: $sideheight + $triheight - $vshift;

html {
  height: 100%;
}
body {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.solid {
  position: relative;
  width: $triwidth * 2;
  height: $triwidth * 2;
  animation: spin 16s infinite linear;
  transform-style: preserve-3d;

  .side {
    position: absolute;
    left: 0;
    bottom: 50%;
//  width: 0;
    border-bottom: $triheight solid black;
    border-left: $triwidth solid transparent;
    border-right: $triwidth solid transparent;
    transform-origin: 50% 0%;
  }

  @for $i from 1 through 5 { // top
    $vshift2: $vshift;
    .side:nth-child(#{$i}) {
      transform: 
        translateY($vshift2) 
        rotateY(#{$i * 72deg}) 
        rotateX($tilt);
      border-bottom-color: #{rgba(random(255),random(255),random(255),0.4)};
    }
  }
  @for $i from 6 through 10 { // bottom
    .side:nth-child(#{$i}) {
      transform: 
        translateY($vshift2) 
        rotateY(#{$i * 72deg + 36deg}) 
        rotateX(#{180deg - $tilt});
      border-bottom-color: #{rgba(random(255),random(255),random(255),0.4)};
    }
  }
  @for $i from 11 through 15 { // bottom sides
    .side:nth-child(#{$i}) {
      transform: 
        translateY(#{$triheight / 2}) 
        rotateY(#{$i * 72deg + 36deg}) 
        translateZ($outerradius)
        rotateX(-$sidetilt);
      border-bottom-color: #{rgba(random(255),random(255),random(255),0.4)};
    }
  }
  @for $i from 16 through 20 { // top sides
    .side:nth-child(#{$i}) {
      transform: 
        translateY(#{$triheight / 2 + $sideheight}) 
        rotateY(#{$i * 72deg})
        rotateZ(180deg)
        translateZ($outerradius)
        rotateX(-$sidetilt);
      border-bottom-color: #{rgba(random(255),random(255),random(255),0.4)};
    }
  }

}


@keyframes spin {
  0% { 
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
  100% { 
    transform: rotateX(360deg) rotateY(720deg) rotateZ(1080deg);
  }
}

