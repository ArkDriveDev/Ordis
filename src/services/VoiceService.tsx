class VoiceService {
    private recognition: SpeechRecognition | null = null;
    private isListening = false;
  
    constructor() {
      const SpeechRecognition = window.SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        this.recognition = new SpeechRecognition();
        this.recognition.continuous = false; // Stop after one command
        this.recognition.interimResults = false; // Only final results
        this.recognition.lang = "en-US"; // Set language
      } else {
        console.error("Speech Recognition not supported in this browser.");
      }
    }
  
    // Start listening for voice commands
    startListening(onResult: (command: string) => void) {
      if (this.recognition && !this.isListening) {
        this.recognition.start();
        this.isListening = true;
  
        this.recognition.onresult = (event: SpeechRecognitionEvent) => {
          const transcript = event.results[0][0].transcript.trim().toLowerCase();
          onResult(transcript);
          this.stopListening();
        };
  
        this.recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
          console.error("Speech recognition error:", event.error);
          this.stopListening();
        };
  
        this.recognition.onend = () => {
          this.isListening = false;
        };
      }
    }
  
    // Stop listening
    stopListening() {
      if (this.recognition && this.isListening) {
        this.recognition.stop();
        this.isListening = false;
      }
    }
  }
  
  export default new VoiceService();