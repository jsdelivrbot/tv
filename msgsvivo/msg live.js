<div style="float: left; width: 100%">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> 
<title>TV Mundo</title>
<iniciotextoaovivo ......................................................="">
<style type='text/css'> 
#inftemp { 
height: 67px; 
position: fixed; 
top: 0; 
left:0; 
z-index: 95469148; 
background: #2f4456; 
width: 100%; 
border-width: 1px 0; 
border-style: solid; 
border-color: #EBEBEB; 
border-bottom: 3px solid gainsboro; 
-moz-box-shadow: 0px 6px 30px #c9c9c9; 
-webkit-box-shadow: 0px 6px 30px #c9c9c9; 
box-shadow: 0px 6px 30px #c9c9c9; 
}

#inftemp ul { 
padding-top: 3px; 
color: #555; 
margin-top: 8px; 
}

.inftempativo a:link { 
color: #c60; 
}

#inftemp li { 
list-style-type: none; 
display: inline; 
color: #ffffff; 
cursor: pointer; 
line-height: 20px; 
text-align: center; 
font-size: 14px; 
font-weight: bold; 
}

#inftemp li a { 
color: #FFFFFF; 
-webkit-transition: All 0.3s ease; 
-moz-transition: All 0.3s ease; 
-o-transition: All 0.3s ease; 
text-decoration: none; 
padding-left: 20px; 
}

#inftemp li a:hover { 
color: #000000; 
-webkit-transform: rotate(0deg) scale(1.2) skew(1deg) translate(0px); 
-moz-transform: rotate(0deg) scale(1.2) skew(1deg) translate(0px); 
-o-transform: rotate(0deg) scale(1.2) skew(1deg) translate(0px); 
text-decoration: none; 
} 
</style> 
</iniciotextoaovivo>
<div id="inftemp">
<div style="text-align: center;">
<a href="https://rawgit.com/soanatareportagens/codigosnr/master/tv%20mundo.html"><span style="color: #fff; font-size: 20px;"><b>Pagina inicial </a>
<!----------------------Marquee ini------------------------>
<script type="text/javascript">  
// O Último Banners não deve utilizar virgula (,) no final da linha
var imgs1 = new Array(
<!-----------moveis projetado3-------------->
);

// Neste Array, você vai colocar as URLs, links de destinos dos sites quando clicarem em um
// O Último Link do site não deve utilizar virgula (,) no final da linha
var lnks1 = new Array(
"http://vulcovulco.blogspot.com./#"<!-----------6vulcovulco-------------->
);

// Deve-se seguir o mesmo padrão das Array acima, a última linha correspondente ao último
// banner, deve ser finalizada sem a virgula (,) no final da linha.
var alt1 = new Array(
"google+",
"2twiter",
"3curtir snr",
"4add snr",
"5whatsapp",
"6vulcovulco"
);

var currentAd1 = 0;

// Nesta variável abaixo, que está marcada como 5, você deverá ALTERAR para o nº correspondente
// total de banners que você adicionou.
var imgCt1 = 1; <!---------numero de banneres----------->

function cycle1() {
  if (currentAd1 == imgCt1) {
    currentAd1 = 0;
  }
  
var banner1 = document.getElementById('adBanner1');
var link1 = document.getElementById('adLink1');

  banner1.src=imgs1[currentAd1]
  banner1.alt=alt1[currentAd1]

  document.getElementById('adLink1').href=lnks1[currentAd1]
  currentAd1++;
}

// Nesta linha de comando abaixo, será responsável pelo intervalo de rotação, ou seja, tempo
// que cada banner será exibido. Neste Exemplo está configurado para mudar de banner a cada
// 10 segundos (11000), só alterar este valor, caso queira um intervalo maior entre os banners
window.setInterval("cycle1()",50000);
</script>
<!-- Nas 2 linhas abaixo, você configura o BANNER PADRÃO, o que é exibido quando o site é carregado
Altere somente o LINK do site, é o que está dentro de: [ href="" ] e o link da imagem/banner, que é o que é 
exibido dentro de: [ src="" ]
 -->
<div style="float: right; width: 80%">
<iframe width="100%" height="65" src="https://rawgit.com/soanatareportagens/codigosnr/master/digite%20textovivo.html"/></iframe></a>

	</div></div></div></div></div>
<!----------------------Marquee fim------------------------>
<div id='navigation_up_down_35349'><script src='https://rawgit.com/soanatareportagens/codigosnr/master/js/updn%20mod1.js' type='text/javascript'/></div></script></div>
<!-------------------------------------------------texto vivo fixo topo fim--------------------------------------------------------->

<!-------------------------------------------------texto vivo fixo topo fim--------------------------------------------------------->
<br/><br/><br/><br/><br/>

<a href="#" style="background-color: #fff; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; border: 0px; box-sizing: border-box; color: white; display: inline-block; font-family: Flama; font-size: 20px; font-style: normal; font-variant: normal; font-weight: bold; line-height: normal; margin: 0px; padding: 1px; text-align: center; text-decoration: none; text-transform: uppercase; vertical-align: baseline; width: 100%;"></a></div>
<!-------------------------------------------------ini menu Tweets--------------------------------------------------------->
<script type="text/javascript" src="https://rawgit.com/soanatareportagens/codigosnr/master/js/exibocultdiv1.js"></script> 
<script type="text/javascript"> 
$(document).ready(function(){ 

$('#conteudott').hide("slow"); 

$('#exibirtt').click(function(){ 

$('#conteudott').show('3000'); 

}); 

$('#ocultartt').click(function(){ 

$('#conteudott').hide('slow'); 
}) 
return false; 

}); 
</script> 

<?php 

include ("conn_db.php"); 

$query = mysql_query("select * from tb_crianca") or die("Erro na query".mysql_error()); 
$linha = mysql_num_rows($query); 
if ($linha==0){ 
echo "Não foi retornado nenhum registro"; 
} 
else{ 
while ($dados = mysql_fetch_array($query)){ 
?> 

<style> 
body { 
font: 12px Verdana, Geneva, sans-serif; 

} 
#conteudott { 
border:0px solid #CCCC33; 
padding:10px; 
margin-top:10px; 
width:100%; 
} 
</style> 
<div style="text-align: center;">
<a id="exibirtt" href="#"><span style="color: #000; font-size: 17px;"><b>Abrir Tweets</b></span></a> |||| <a href="#" id="ocultartt"><span style="color: #000; font-size: 17px;"><b>Fechar Tweets</b></span></a>
<div id="conteudott"> 
<!------------------seu conteudo ini---------------------->
<div style="text-align: center;"> 
<!-------------------TV------------->
 </b></span></div><div style="float: left; width: 60%">
<!--------------------------------------------------->	
<div style="text-align: center;">
<a class="twitter-timeline" data-lang="pt" data-width="750" data-height="600" href="https://twitter.com/soanatareportag">soanatareportagens</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

</div></a><br/><br/><br/>

</div>
<!------------ cod publicidade --------------> 
    <div style="float: Right; width: 40%">
<!-------------------------------- cod publicidade ---------------------------------->
<div style="text-align: center;">  <br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<!---ini---troca banner reflashprog300x250 twitter--->
<iframe width="100%" height="100%" src="https://rawgit.com/soanatareportagens/codigosnr/master/banners/codbanner300x250.html" frameborder="0" allowfullscreen></iframe>
<!---Fim---troca banner reflashprog350x250 twitter--->

</div>
<!// end anuncios--> 
</!></div></!...so>
<!-------------------------espaço do seu codigo ini-------------------------->
</div></div></?php>

<!-----------ini div abre temp------------>
	<script>
		function exibe(){
			document.getElementById('download').style.display="";
		}
		
		window.onload = function(){
			setTimeout("exibe()", 60000);
		}
	</script>
	
<!-----------fim div abre temp------------>
</div></div></div>
<!-------------------------------------------------fim menu Tweets--------------------------------------------------------->
<a href="#" style="background-color: #fff; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; border: 0px; box-sizing: border-box; color: white; display: inline-block; font-family: Flama; font-size: 20px; font-style: normal; font-variant: normal; font-weight: bold; line-height: normal; margin: 15px; padding: 1px; text-align: center; text-decoration: none; text-transform: uppercase; vertical-align: baseline; width: 100%;"></a></div>
    <!-----------------ini ocultar tv mundo-------------->

<!-------------------TV------------->
<div style="text-align: center;">
<div style="float: left; width: 65%;">
	<script language="Javascript">
function showDiv(div)
{
      document.getElementById("plano1").className = "invisivel";
      document.getElementById("plano2").className = "invisivel";
      document.getElementById("plano3").className = "invisivel";
      document.getElementById("plano4").className = "invisivel";
      document.getElementById("plano5").className = "invisivel";
      document.getElementById("plano6").className = "invisivel";
      document.getElementById("plano7").className = "invisivel";
      document.getElementById("plano8").className = "invisivel";
      document.getElementById("plano9").className = "invisivel";
      document.getElementById("plano10").className = "invisivel";
      document.getElementById("plano11").className = "invisivel";
      document.getElementById("plano12").className = "invisivel";
      document.getElementById("plano13").className = "invisivel";
      document.getElementById("plano14").className = "invisivel";
      document.getElementById("plano15").className = "invisivel";
      document.getElementById("plano16").className = "invisivel";
      document.getElementById("plano17").className = "invisivel";
      document.getElementById("plano18").className = "invisivel";
      document.getElementById("plano19").className = "invisivel";
      document.getElementById("plano20").className = "invisivel";
      document.getElementById("plano21").className = "invisivel";
      document.getElementById("plano22").className = "invisivel";
      document.getElementById("plano23").className = "invisivel";
      document.getElementById("plano24").className = "invisivel";
      document.getElementById("plano25").className = "invisivel";
      document.getElementById("plano26").className = "invisivel";
      document.getElementById("plano27").className = "invisivel";
      document.getElementById("plano28").className = "invisivel";
      document.getElementById("plano29").className = "invisivel";
      document.getElementById("plano30").className = "invisivel";
      document.getElementById("plano31").className = "invisivel";
      document.getElementById("plano32").className = "invisivel";
      document.getElementById("plano33").className = "invisivel";
      document.getElementById("plano34").className = "invisivel";
      document.getElementById("plano35").className = "invisivel";
     
document.getElementById(div).className = "visivel";
}
</script>
<style>
.invisivel { display: none; }
.visivel { visibility: visible; }
</style>
<div style="float: right; width: 15%">
<img src="https://lh3.googleusercontent.com/-LulTPgMmXs8/WZo9KS95_8I/AAAAAAAACp4/cEOvz3ZcPFY6Zfv5T4eI4Qxb64ByDYmVQCJoC/w530-h173-rw/live1%2Bgif.gif'border="0" width="60" height="17" />
</div><div style="float: right; width: 20%">
<span style="color: #2f4456; font-size: 18px;"><b>
TV MUNDO<br/>
</b></span></div>
<div style="float: left; width: 35%">
<style type="text/css"> /* Para todos os options */ select, option{ width:370pt; padding:1pt 14pt;  
background: url(https://soanatareportagens.000webhostapp.com/ao%20vivo%20face1/seta%20pisc%20dir%20min.gif) no-repeat left #2f4456; border: px solid #2f4456; font-size: 18px; color: #fff;   "><b> Fechar TV Mundo</b></span> } 
       </style>
</style>
 <select id="combobox" name="combobox" onchange="showDiv(this.value);">
        <option value="plano1" />&nbsp; &nbsp;&nbsp;&nbsp;...→&nbsp; Selecione Um canal aqui
	<option value="plano1" />Canal 1 Reservado
	<option value="plano2" />Canal 2 TV Justiça – Brasil
	<option value="plano3" />Canal 3 TV Senado – Brasil
        <option value="plano4" />Canal 4 TODO MUNDO ODEIA O CHRIS
        <option value="plano5" />Canal 5 TV Canção Nova - Brasil
        <option value="plano6" />Canal 6 Chef TV O Canal da Gastronomia - Brasil
        <option value="plano7" />Canal 7 Euronews (en español)
        <option value="plano8" />Canal 8 Euronews (em português)
        <option value="plano9" />Canal 9 Patrulha da Cidade - TV Ponta Negra - Brasil
        <option value="plano10" />Canal 10 HispanTV en vivo - FULL HD
        <option value="plano11" />Canal 11 DESENHOS 24 HORAS
        <option value="plano12" />Canal 12 DESENHOS 24 HORAS 2
        <option value="plano13" />Canal 13 TN en Vivo - Argentina
        <option value="plano14" />Canal 14 CNN LIVE
        <option value="plano15" />Canal 15 Señal de CNN en Español
        <option value="plano16" />Canal 16 FOX News Live
        <option value="plano17" />Canal 17 AMAZON SAT - Brasil
        <option value="plano18" />Canal 18 Cidade Alerta- TV Record Brasil
        <option value="plano19" />Canal 19 BAND NEWS AO VIVO - BRASIL
        <option value="plano20" />Canal 20 RT en espanha HD
        <option value="plano21" />Canal 21 RT на русском em Russo
	<option value="plano22" />Canal 22 Al Jazeera English - Live
        <option value="plano23" />Canal 23 Sky News Live
        <option value="plano24" />Canal 24 FRANCE 24 Live
        <option value="plano25" />Canal 25 Jornal da Cultura
        <option value="plano26" />Canal 26 Fox Sports
        <option value="plano27" />Canal 27 Jogo Aberto
        <option value="plano28" />Canal 28 C5N en VIVO
        <option value="plano29" />Canal 29 KBS World 24 Korea
        <option value="plano30" />Canal 30 TV ABC News (Australia)
        <option value="plano31" />Canal 31 Boston News
        <option value="plano32" />Canal 32 India Today Live TV
        <option value="plano33" />Canal 33 Seu Jornal Rede TVT - BRasil 
        <option value="plano34" />Canal 34 Bom Dia Brasil
        <option value="plano35" />Canal 35 Jornal hoje
        
 </select>
</div>      
<div style="float: center; width: 100%">
<a href="#" style="background-color: #2f4456; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; border: 0px; box-sizing: border-box; color: white; display: inline-block; font-family: Flama; font-size: 20px; font-style: normal; font-variant: normal; font-weight: bold; line-height: normal; margin: 0px; padding: 1px; text-align: center; text-decoration: none; text-transform: uppercase; vertical-align: baseline; width: 100%;"></a>
<div id="mat_olho" itemprop="description" style="background-color:#000; outline: 0px; padding: 0px; text-align: -webkit-auto; vertical-align: center;">

<div id="plano1" class="invisivel"> 
<div style="text-align: center;">
<span style="color: #fff; font-size: 20px;"><b>Jornal do Estado - 26 de Abril - TV Ponta Negra Natal RN</a>
<br/>
<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ftvpontanegrarn%2Fvideos%2F1755323074490723%2F&show_text=0&width=560" width="800" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
	</div></div></div></div><!------------canal 1 acima------------------->
	
<div id="plano2" class="invisivel">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/IDptnuJs_nw?rel=0" frameborder="0" allowfullscreen></iframe>
</div><!--canl 2 acima TV Justiça – Brasil acima--------->

<div id="plano3" class="invisivel">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/9fzsuR8gEaQ?rel=0" frameborder="0" allowfullscreen></iframe>
</div><!-canal 3 acima tv senado – brasil acima----------->

<div id="plano4" class="invisivel">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/jCEd2bZ-xVI?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen>
        </iframe>
</div><!--Canal 4 TODO MUNDO ODEIA O CHRIS – Brasil acima--------------->

<div id="plano5" class="invisivel">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/7NY8HrZex-U?
autoplay=0&rel=0&enablejsapi=1&playerapiid=ytplayer&wmode=transparent" frameborder="0" allowfullscreen></iframe>
</div><!-canal 5 - tv cancao nova - brasil acima----------->

<div id="plano6" class="invisivel">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/NC7VGh5LjKE?rel=0&amp;showinfo=0" frameborder="0" 
	    allowfullscreen></iframe>
</div><!-canal 6 - chef tv o canal da gastronomia -brasil acima------------------------------------->

<div id="plano7" class="invisivel">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/tYRJQKmKOJo?
			autoplay=0&rel=0&enablejsapi=1&playerapiid=ytplayer&wmode=transparent" frameborder="0" allowfullscreen></iframe>
</div><!-canal 7 euronews (em inglês) acima---------------->

<div id="plano8" class="invisivel">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/3HYUSsBm_YA?
autoplay=0&rel=0&enablejsapi=1&playerapiid=ytplayer&wmode=transparent" frameborder="0" allowfullscreen></iframe>
</div><!--canal 8 euronews (en español) (em português) acima------------->

<div id="plano9" class="invisivel"> 
<div style="text-align: center;">
<span style="color: #fff; font-size: 20px;"><b>Patrulha da Cidade - TV Ponta Negra Natal RN - Brasil</a>
<br/>
<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ftvpontanegrarn%2Fvideos%2F1756012917755072%2F&show_text=0&width=560"  width="800" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
</div></div><!------------Canal 9 Patrulha da Cidade - TV Ponta Negra - Brasil acima-------------------> 

<div id="plano10" class="invisivel">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/ypQMJCjW4ZU?rel=0&amp;showinfo=0" frameborder="0" 
allowfullscreen></iframe>
</div><!-canal 10 hispantv en vivo - full hd-------------->

<div id="plano11" class="invisivel">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/fw8HNViPH9w?rel=0&amp;showinfo=0" frameborder="0" 
allowfullscreen></iframe>
</div><!-canal 11 desenhos 24 horas----------------------->

<div id="plano12" class="invisivel">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/nH77YMsPwXo?
	autoplay=0&rel=0&enablejsapi=1&playerapiid=ytplayer&wmode=transparent" frameborder="0" allowfullscreen></iframe>
</div><!----------canal 12 DESENHOS 24 HORAS 2------------>

<div id="plano13" class="invisivel">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/0tek2aa8hAQ?
autoplay=0&rel=0&enablejsapi=1&playerapiid=ytplayer&wmode=transparent" frameborder="0" allowfullscreen></iframe>
</div><!--canal 13 TN en Vivo - Argentina----------------->

<div id="plano14" class="invisivel">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/Ga3maNZ0x0w?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
</div><!------canal 14 CNN LIVE acima--------------->

<div id="plano15" class="invisivel">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/OSVmblr0tP0?
	autoplay=0&rel=0&enablejsapi=1&playerapiid=ytplayer&wmode=transparent" frameborder="0" allowfullscreen></iframe>
</div><!--canal 15 CNN LIVE espanhol acima-------------->

<div id="plano16" class="invisivel">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/uv-H6bS30zQ?rel=0&amp;showinfo=0" frameborder="0" 2
allowfullscreen></iframe>
</div><!----canal 16 FOX News Live acima---------------->

<div id="plano17" class="invisivel">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/B3ywg3Vk9gY?rel=0&amp;showinfo=0" frameborder="0" 
allowfullscreen></iframe>
</div><!--canal 17 AMAZON SAT - Brasil acima----------->

<div id="plano18" class="invisivel">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/PCuq939C_P4?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
</div><!--canal 18 cidade alerta- TV Record Brasil acima--->

<div id="plano19" class="invisivel">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/n4lFlYriouw?rel=0&amp;showinfo=0" frameborder="0" 
allowfullscreen></iframe>
</div><!--canal 19 EBC TV Brasil----------------------->

<div id="plano20" class="invisivel">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/mV8jp1N2fSw?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
</div><!--canal 20 RT en espanha HD-------------------->

<div id="plano21" class="invisivel">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/QrsTxn7W9m0?rel=0&amp;showinfo=0" frameborder="0" 
	    allowfullscreen></iframe>
</div><!--canal 21 RT на русском em Russo ascima---------------->
		
	<div id="plano22" class="invisivel">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/Qmu26hkNhrA?
autoplay=0&rel=0&enablejsapi=1&playerapiid=ytplayer&wmode=transparent" frameborder="0" allowfullscreen></iframe>
</div><!--canal 22 Al Jazeera English - Live acima------>

<div id="plano23" class="invisivel">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/XOacA3RYrXk?autoplay=0&rel=0&enablejsapi=1&playerapiid=ytplayer&wmode=transparent" frameborder="0" allowfullscreen></iframe>
</div><!--canal 23 Sky News - Live acima---------------->

<div id="plano24" class="invisivel">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/hL0sEdVJs3U?autoplay=0&rel=0&enablejsapi=1&playerapiid=ytplayer&wmode=transparent" frameborder="0" allowfullscreen></iframe>
</div><!--canal 24 FRANCE 24 Live acima------------------>

<div id="plano25" class="invisivel">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/_UZ9HttUjDQ?
	autoplay=0&rel=0&enablejsapi=1&playerapiid=ytplayer&wmode=transparent" frameborder="0" allowfullscreen></iframe>
</div><!--canal 25 Jornal da Cultura acima---------------->

<div id="plano26" class="invisivel">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/7rdymwbPbTo?
	autoplay=0&rel=0&ena3blejsapi=1&playerapiid=ytplayer&wmode=transparent" frameborder="0" allowfullscreen></iframe>
</div><!--canal 26 Fox Sports acima---------------------->

<div id="plano27" class="invisivel">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/gI9XfNwbTJE?
	autoplay=0&rel=0&enablejsapi=1&playerapiid=ytplayer&wmode=transparent" frameborder="0" allowfullscreen></iframe>
</div><!-canal 27 jogo aberto acima----------------------->

<div id="plano28" class="invisivel">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/otjPGSO968w?
	autoplay=0&rel=0&enablejsapi=1&playerapiid=ytplayer&wmode=transparent" frameborder="0" allowfullscreen></iframe>
</div><!-canal 28 c5n en vivo acima----------------------->

<div id="plano29" class="invisivel">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/NCLQN16Lyb4?
	autoplay=0&rel=0&enablejsapi=1&playerapiid=ytplayer&wmode=transparent" frameborder="0" allowfullscreen></iframe>
</div><!-canal 29 kbs world 24 korea acima---------------->

<div id="plano30" class="invisivel">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/KG5k0t7WdYY?autoplay=0&rel=0&enablejsapi=1&playerapiid=ytplayer&wmode=transparent" frameborder="0" allowfullscreen></iframe>
</div><!-canal 30 tv abc news (australia) acima----------->

<div id="plano31" class="invisivel"> 
<iframe scrolling="no" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen 
src="https://www.fox255boston.com/popup-livestream"  width ="80%" height="500"></iframe>
</div><!-canal 31 fox25 boston news acima---------------->

<div id="plano32" class="invisivel">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/62rmi9KMvVE?
autoplay=0&rel=0&enablejsapi=1&playerapiid=ytplayer&wmode=transparent" frameborder="0" allowfullscreen></iframe>
</div><!--canal 32 India Today Live TV acima-------------->

<div id="plano33" class="visivel">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/AWJnQ203dqQ?
rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
</div><!--canal 33 Rede TVT - BRasil Seu Jornal acima---->
  
  <div id="plano34" class="invisivel">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/EAkEc_gFyhM?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
</div><!-canal 34 bom dia brasil acima------------------>
                                           
<div id="plano35" class="invisivel">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/ZcjMn0iygvQ?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
</div><!-canal 35 jornal hoje acima------------------>
	

                                                                                                               
<br/><br/><!---------------------------------------------<p /> 
<?php 
}} 
?> 
</?php></!-canal></!-canal></!-canal></!-canal></!-canal></!-canal></!-canal></!-canal></!-canal></!-canal></!-canal></!-canal></!-canal></!-canal></!-canal></!-canal></!-canal></!-canal></!-canal></!-canal></div></div></div></a> 
<!------------ cod publicidade --------------> 
   </div></div></div>
<div style="float: Right; width: 30%;">
<!------------ cod publicidade -------------->
<!---ini---troca banner reflashprog300x250 direita do player--->
<br />
<br />
<br />
<br />
<br />
<br />
<!---ini---troca banner reflashprog300x250 direita do player--->
<iframe width="100%" height="85%" src="https://rawgit.com/soanatareportagens/codigosnr/master/banners/codbanner300x250.html" frameborder="0" allowfullscreen></iframe>
<!---Fim---troca banner reflashprog350x250 direita do player--->
</div>


<div id="canal1" style="background-color: #fff; color:fff; padding:1px;">
<!-------------------------espaço do seu codigo ini-------------------------->
  

<br/><br/><br/><br/>

<!-------------------------fim Voltar para Pagina Inicial TV Mundo-------------------------------------->
<br/><br/><br/><br/><br/><p /> <p />
<!------------ Histats.com  START  (aync)------------>

<!---------------- Histats.com  END ---------------->
<!---------------------------------------------------------rodape-------------------------------------------------------------------->
<!---------------------------------------------------------rodape-------------------------------------------------------------------->
<!---------------------------------------------------------rodape-------------------------------------------------------------------->
<a href="#" style="background-color: #2f4456; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; border: 0px; box-sizing: border-box; color: white; display: inline-block; font-family: Flama; font-size: 20px; font-style: normal; font-variant: normal; font-weight: bold; line-height: normal; margin: 0px; padding: 1px; text-align: center; text-decoration: none; text-transform: uppercase; vertical-align: baseline; width: 100%;"></a></div>
<div style="text-align: center;"><br/>
<span style="color: #0000; font-size: 15px;"><b>
Comunique canais fora do ar através do whatsapp / telegram (55) 84 98780-4100<br/>
Contato telegram (55) 84 98780-4100<br/>
Canal telegram @soanatareportagens
 </b></b></span></div></div>
<br/> <br/><br/> 
