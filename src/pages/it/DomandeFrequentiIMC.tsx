import { Header } from "@/components/Header";
import { HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RelatedPages } from "@/components/RelatedPages";

interface FAQItemProps { question: string; answer: string; }

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/30 transition-colors">
        <span className="font-medium pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-5 pb-5 text-muted-foreground">
          <div dangerouslySetInnerHTML={{ __html: answer }} />
        </div>
      )}
    </div>
  );
};

const DomandeFrequentiIMC = () => {
  const faqs = [
    { question: "Cos'è esattamente l'IMC?", answer: "L'<strong>Indice di Massa Corporea (IMC)</strong> è un indicatore utilizzato per stimare la corpulenza di una persona. Si calcola dividendo il peso (in kg) per il quadrato dell'altezza (in metri). La formula: IMC = peso / altezza². È uno strumento di screening rapido utilizzato dai professionisti della salute." },
    { question: "Come si calcola l'IMC?", answer: "Per calcolare il tuo IMC, dividi il tuo peso in chilogrammi per il quadrato della tua altezza in metri. Esempio: se pesi 70 kg e sei alto 1,75 m: IMC = 70 / (1,75 × 1,75) = 70 / 3,0625 = <strong>22,9</strong>. Puoi anche utilizzare il nostro <a href='/it/imc' class='text-primary hover:underline'>calcolatore IMC gratuito</a>." },
    { question: "Qual è l'IMC ideale?", answer: "Secondo l'Organizzazione Mondiale della Sanità, l'<strong>IMC normale</strong> è compreso tra <strong>18,5 e 24,9</strong>. È l'intervallo in cui i rischi per la salute sono più bassi. Tuttavia, l'IMC ideale può variare in base all'età, al sesso e all'attività fisica. L'IMC ottimale si colloca spesso intorno a 21-22." },
    { question: "L'IMC è affidabile?", answer: "L'IMC è un buon indicatore per la popolazione generale, ma presenta dei <strong>limiti</strong>. Non distingue tra massa muscolare e massa grassa. Uno sportivo muscoloso può avere un IMC elevato senza avere grasso in eccesso. Altri indicatori come la circonferenza della vita o la percentuale di massa grassa sono complementari. Consulta la nostra pagina sui <a href='/it/limiti-imc' class='text-primary hover:underline'>limiti dell'IMC</a>." },
    { question: "Qual è l'IMC normale per le donne?", answer: "L'IMC normale per le donne è lo stesso degli uomini: <strong>18,5 a 24,9</strong>. Tuttavia, le donne hanno naturalmente una percentuale di grasso corporeo più elevata (20-25% contro 15-20% negli uomini). La circonferenza della vita è spesso più pertinente: non dovrebbe superare gli 80 cm. Visita la nostra pagina sull'<a href='/it/imc-donna' class='text-primary hover:underline'>IMC per le donne</a>." },
    { question: "Qual è l'IMC normale per gli uomini?", answer: "L'IMC normale per gli uomini è compreso tra <strong>18,5 e 24,9</strong>. Gli uomini muscolosi possono avere un IMC più elevato (fino a 27-28) senza problemi di salute. La circonferenza della vita è un indicatore complementare importante: non dovrebbe superare i 94 cm. Consulta la nostra pagina sull'<a href='/it/imc-uomo' class='text-primary hover:underline'>IMC per gli uomini</a>." },
    { question: "Come si calcola l'IMC di un bambino?", answer: "Il calcolo è lo stesso (peso/altezza²), ma l'<strong>interpretazione è diversa</strong>. Le soglie per gli adulti (18,5/25/30) non vengono utilizzate. Si usano le curve di IMC che tengono conto dell'età e del sesso. Il bambino deve essere posizionato sulle curve dei percentili. Consulta la nostra pagina sull'<a href='/it/imc-bambino' class='text-primary hover:underline'>IMC per i bambini</a>." },
    { question: "Si può calcolare l'IMC durante la gravidanza?", answer: "<strong>No</strong>, l'IMC non è applicabile durante la gravidanza. L'aumento di peso è normale e necessario. L'IMC prima della gravidanza viene utilizzato come riferimento per determinare l'aumento di peso raccomandato (11-16 kg con un IMC normale). Consulta il tuo ginecologo per un monitoraggio personalizzato." },
    { question: "L'IMC è valido per gli sportivi?", answer: "L'<strong>IMC è distorto per gli sportivi</strong>. La formula non distingue tra muscoli e grasso. Un bodybuilder con il 10% di massa grassa può avere un IMC superiore a 30 (classificato come obeso). Per gli sportivi, l'<strong>FFMI</strong>, la percentuale di massa grassa o la circonferenza della vita sono più adatti. Consulta la nostra pagina sull'<a href='/it/imc-sportivo' class='text-primary hover:underline'>IMC per gli sportivi</a>." },
    { question: "A partire da quale IMC si è in sovrappeso?", answer: "Il <strong>sovrappeso</strong> inizia con un IMC di <strong>25</strong>. Tra 25 e 29,9 si è in sovrappeso (o pre-obesità). A partire da 30 si parla di obesità. Queste soglie sono state stabilite dall'OMS e sono utilizzate in tutto il mondo." },
    { question: "A partire da quale IMC si è obesi?", answer: "L'<strong>obesità</strong> inizia con un IMC di <strong>30</strong>. Si divide in tre gradi: Grado I (30-34,9) = obesità moderata, Grado II (35-39,9) = obesità grave, Grado III (≥40) = obesità morbida. Più alto è l'IMC, maggiori sono i rischi per la salute." },
    { question: "Come perdere peso in modo efficace?", answer: "Per perdere peso in modo duraturo: <strong>1)</strong> Creare un deficit calorico moderato (300-500 kcal/giorno), <strong>2)</strong> Privilegiare un'alimentazione equilibrata e ricca di proteine, <strong>3)</strong> Praticare attività fisica regolare (cardio + forza), <strong>4)</strong> Dormire a sufficienza (7-8 ore), <strong>5)</strong> Essere pazienti: puntare al massimo a 0,5-1 kg a settimana." },
    { question: "La circonferenza della vita è più importante dell'IMC?", answer: "La circonferenza della vita è un <strong>eccellente complemento</strong> all'IMC. Misura il grasso viscerale, che è il più pericoloso per la salute. Soglie raccomandate: Uomini <94 cm (rischio moderato), <102 cm (rischio elevato). Donne <80 cm (rischio moderato), <88 cm (rischio elevato)." },
    { question: "L'IMC cambia con l'età?", answer: "La formula dell'IMC rimane la stessa, ma l'<strong>interpretazione può variare</strong>. Dopo i 65 anni, un IMC leggermente più alto (fino a 27) può essere protettivo. Con l'avanzare dell'età, la massa muscolare diminuisce, il che può distorcere l'IMC. Si raccomanda un monitoraggio medico regolare." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-float" />
      </div>

      <div className="container max-w-4xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            Domande Frequenti
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">FAQ IMC</span> : Domande Frequenti sull'IMC
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Risposte alle domande più frequenti sull'Indice di Massa Corporea
          </p>
        </header>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold mb-4">Calcola subito il tuo IMC</h3>
          <p className="text-muted-foreground mb-6">Utilizza il nostro calcolatore gratuito per scoprire il tuo IMC</p>
          <Link to="/it/imc" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">Calcolare il mio IMC</Link>
        </div>

        <div className="glass-card p-8 mt-8">
          <h2 className="text-2xl font-display font-bold mb-6">Tutto sull'IMC</h2>
          <div className="text-muted-foreground space-y-4">
            <p>Questa <strong>FAQ sull'IMC</strong> risponde alle domande più frequenti sul calcolo e l'interpretazione dell'Indice di Massa Corporea. Che vogliate sapere <strong>come calcolare il vostro IMC</strong>, <strong>qual è l'IMC ideale</strong> o <strong>se l'IMC è affidabile</strong>, qui troverete le risposte.</p>
            <p>L'IMC è uno strumento semplice ma utile per valutare la propria corpulenza. Presenta tuttavia dei limiti e dovrebbe essere completato da altri indicatori. Non esitate a consultare uno specialista per una valutazione completa.</p>
          </div>
        </div>


        <RelatedPages />

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2024 FAQ IMC - Risposte alle vostre domande</p>
        </footer>
      </div>
    </div>
  );
};

export default DomandeFrequentiIMC;
