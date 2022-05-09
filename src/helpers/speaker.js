export function speakerOn() {
	let speakerOn;
	if (!'speechSynthesis' in window) {
		alert('Lo siento, tu navegador no soporta esta tecnología');
		speakerOn = false;
	} else speakerOn = true;

	return speakerOn;
}

export function talk(txt = '') {
	let utterance = new SpeechSynthesisUtterance();
	utterance.text = txt;
	speechSynthesis.speak(utterance);
}
