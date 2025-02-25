function doGet(e) {

  const IMAGEID = "1m_zWM48cjDBgdmrJOpF5-Fj7_cDcBiXH"
  var webDefecto = "index";
  var qweb = e.parameter.qw || webDefecto;
  var title;

  if (qweb == "independizar") {
    title = "Modificar e independizar"
  } else if (qweb == "index") {
    title = "Biblioteca Celdas Roboticas"
  } else if (qweb = "comandos"){
    title = "Comandos"
  }


  var output = HtmlService.createHtmlOutputFromFile(qweb);
  return output.addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setFaviconUrl(`https://drive.google.com/uc?id=${IMAGEID}&export=download&format=png`)
    .setTitle(title)
}
