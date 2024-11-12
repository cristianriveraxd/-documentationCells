function doGet() {
  const IMAGEID = "1m_zWM48cjDBgdmrJOpF5-Fj7_cDcBiXH"
  var output = HtmlService.createHtmlOutputFromFile('index');
  return output.addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setFaviconUrl(`https://drive.google.com/uc?id=${IMAGEID}&export=download&format=png`)
    .setTitle("Biblioteca Celdas Roboticas")
}

function doIndependizar(){
  const IMAGEID = "1m_zWM48cjDBgdmrJOpF5-Fj7_cDcBiXH"
  var output = HtmlService.createHtmlOutputFromFile('independizar');
  return output.addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setFaviconUrl(`https://drive.google.com/uc?id=${IMAGEID}&export=download&format=png`)
    .setTitle("Biblioteca Celdas Roboticas - independizar")
}
