import { useState, useCallback } from "react";
import { Header } from "@/components/Header";
import { BMICalculator } from "@/components/BMICalculator";
import { BMIGauge } from "@/components/BMIGauge";
import { Dumbbell, AlertTriangle, Target, Scale, Activity, TrendingUp, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { RelatedPages } from "@/components/RelatedPages";

const IMCDeportista = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [weight, setWeight] = useState<number | null>(null);
  const [height, setHeight] = useState<number | null>(null);

  const handleCalculate = useCallback((calculatedBmi: number, w: number, h: number) => {
    setBmi(calculatedBmi);
    setWeight(w);
    setHeight(h);
  }, []);

  // Calculate FFMI if we have data
  const ffmi = weight && height ? (weight * 0.85) / Math.pow(height / 100, 2) : null;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-orange-500/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-6">
            <Dumbbell className="w-4 h-4" />
            Calculadora para deportistas
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-orange-500">IMC Deportista</span> : Limites del IMC en Atletas
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Por que el IMC clasifica a Messi como "normal" pero a Rafael Nadal como "sobrepeso"? Entendiendo los limites del IMC para deportistas latinoamericanos y espanoles.
          </p>
        </header>

        {/* Warning Banner */}
        <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-orange-500 mb-2">Atencion: El IMC esta sesgado para deportistas</h3>
              <p className="text-muted-foreground">
                El IMC no distingue entre <strong>masa muscular</strong> y <strong>masa grasa</strong>.
                Un futbolista de La Liga o un boxeador como Canelo Alvarez puede tener un IMC de "sobrepeso" mientras esta en condiciones fisicas excepcionales. La <strong>FEMEDE</strong> (Federacion Espanola de Medicina del Deporte) y los medicos deportivos de America Latina desaconsejan usar el IMC como unico indicador en atletas.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8">
          <BMICalculator onCalculate={handleCalculate} />
          <BMIGauge bmi={bmi} />
        </div>

        {/* FFMI Estimation */}
        {bmi && (
          <div className="glass-card p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <TrendingUp className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-xl font-display font-bold">Estimacion FFMI (Fat-Free Mass Index)</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              El FFMI es un mejor indicador para deportistas ya que tiene en cuenta la masa magra. Utilizado por los servicios medicos de clubes como el Real Madrid y el FC Barcelona, asi como por la FEMEDE.
            </p>
            <div className="bg-muted/30 rounded-xl p-4 text-center">
              <p className="text-sm text-muted-foreground mb-2">FFMI estimado (con 15% de masa grasa)</p>
              <p className="text-3xl font-bold text-orange-500">{ffmi?.toFixed(1)}</p>
              <p className="text-xs text-muted-foreground mt-2">
                Natural: 18-25 | Dopaje probable: &gt;25
              </p>
            </div>
          </div>
        )}

        <div className="space-y-8">
          {/* Famous athlete examples */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Dumbbell className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Deportistas famosos y su IMC: la prueba de que el indice falla</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Estos tres iconos del deporte hispanohablante muestran las limitaciones del IMC. Todos estan en excelente forma fisica, pero el IMC no refleja su realidad corporal.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-muted/30 rounded-xl p-6 text-center">
                <div className="text-3xl mb-2">🎾</div>
                <h4 className="font-bold mb-1">Rafael Nadal</h4>
                <p className="text-sm text-muted-foreground mb-3">Tenis - Espana</p>
                <p className="text-xs text-muted-foreground">1,85 m | 85 kg</p>
                <p className="text-2xl font-bold text-warning mt-2">IMC ~24,8</p>
                <p className="text-xs text-warning mt-1">Casi "sobrepeso" segun la OMS</p>
                <p className="text-xs text-muted-foreground mt-2">22 Grand Slams, masa muscular densa en tren superior. El IMC lo situa al borde del sobrepeso cuando su grasa corporal ronda el 10-12%.</p>
              </div>
              <div className="bg-muted/30 rounded-xl p-6 text-center">
                <div className="text-3xl mb-2">⚽</div>
                <h4 className="font-bold mb-1">Lionel Messi</h4>
                <p className="text-sm text-muted-foreground mb-3">Futbol - Argentina</p>
                <p className="text-xs text-muted-foreground">1,70 m | 72 kg</p>
                <p className="text-2xl font-bold text-warning mt-2">IMC ~24,9</p>
                <p className="text-xs text-warning mt-1">Limite exacto del "normal"</p>
                <p className="text-xs text-muted-foreground mt-2">El mejor futbolista del mundo roza el "sobrepeso" segun el IMC. Sus piernas potentes y su baja estatura elevan el indice artificialmente.</p>
              </div>
              <div className="bg-muted/30 rounded-xl p-6 text-center">
                <div className="text-3xl mb-2">🥊</div>
                <h4 className="font-bold mb-1">Saul "Canelo" Alvarez</h4>
                <p className="text-sm text-muted-foreground mb-3">Boxeo - Mexico</p>
                <p className="text-xs text-muted-foreground">1,73 m | 79 kg</p>
                <p className="text-2xl font-bold text-destructive mt-2">IMC ~26,4</p>
                <p className="text-xs text-destructive mt-1">Clasificado "sobrepeso"</p>
                <p className="text-xs text-muted-foreground mt-2">Campeon mundial indiscutido, cuerpo esculpido con menos de 10% de grasa. El IMC lo clasifica con sobrepeso por su masa muscular compacta.</p>
              </div>
            </div>
          </div>

          {/* Why IMC is biased */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Scale className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Por que el IMC esta sesgado en deportistas hispanos</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                El <strong>IMC deportista</strong> presenta problemas porque la formula no diferencia entre el peso
                del musculo y el de la grasa. El <strong>musculo es mas denso que la grasa</strong>:
                a volumen igual, pesa significativamente mas.
              </p>
              <p>
                En America Latina y Espana, donde el <strong>futbol</strong> es rey y el <strong>boxeo</strong> tiene raices profundas, millones de deportistas recreativos y profesionales se ven mal clasificados por el IMC. Un jugador de la <strong>Liga MX</strong> con musculatura desarrollada y un defensa de <strong>La Liga espanola</strong> con tren inferior potente pueden superar facilmente el umbral de 25 sin ninguna grasa excedente.
              </p>
              <p>
                La <strong>FEMEDE</strong> (Federacion Espanola de Medicina del Deporte) y las asociaciones de medicina deportiva de Mexico, Argentina y Colombia coinciden: el IMC no debe usarse de forma aislada en personas fisicamente activas. Es necesario complementarlo con mediciones de composicion corporal como la <strong>absorciometria DXA</strong> o la <strong>bioimpedancia electrica</strong>.
              </p>
            </div>
          </div>

          {/* Sports examples - 4 cards */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Activity className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">IMC por deporte: rangos tipicos en atletas latinos y espanoles</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-1">Futbol (La Liga, Liga MX, Libertadores)</h4>
                <p className="text-2xl font-bold text-orange-500 mb-2">IMC 22-25</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>El deporte principal del mundo hispanohablante</li>
                  <li>Atletas relativamente delgados con alta resistencia aerobica</li>
                  <li>Defensas centrales tienden a IMC mas altos (24-26)</li>
                  <li>Mediocampistas y extremos: IMC 21-23, perfil mas esbelto</li>
                  <li>Ejemplos: Messi (24,9), Vinicius Jr. (22,4), Pedri (21,8)</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-1">Boxeo y MMA (Canelo, UFC Latinos)</h4>
                <p className="text-2xl font-bold text-orange-500 mb-2">IMC 25-30</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Cultura de cortes de peso extremos antes de las peleas</li>
                  <li>Alta masa muscular en tren superior y core</li>
                  <li>Tradicion centenaria en Mexico, Cuba, Puerto Rico</li>
                  <li>Canelo Alvarez: IMC 26,4 clasificado "sobrepeso"</li>
                  <li>Brandon Moreno (UFC): IMC ~27, campeon del mundo</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-1">Rugby (Los Pumas, Jaguares, Seleccion espanola)</h4>
                <p className="text-2xl font-bold text-orange-500 mb-2">IMC 28-33</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Los forwards pueden superar 110 kg con baja grasa corporal</li>
                  <li>Los Pumas argentinos: equipo de elite con IMC promedio ~29</li>
                  <li>Crecimiento del rugby en Uruguay, Chile y Colombia</li>
                  <li>Marcos Kremer (Los Pumas): 1,96 m, 110 kg, IMC ~28,6</li>
                  <li>El IMC clasifica a la mayoria como "obesos": resultado absurdo</li>
                </ul>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-1">Beisbol (MLB Latinos, LMB, Serie del Caribe)</h4>
                <p className="text-2xl font-bold text-orange-500 mb-2">IMC 25-29</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Muchos jugadores latinos en MLB: Republica Dominicana, Cuba, Venezuela</li>
                  <li>Bateadores de potencia tienen IMC elevados por masa muscular</li>
                  <li>Pitchers necesitan fuerza explosiva en hombro y core</li>
                  <li>Juan Soto: 1,88 m, 100 kg, IMC ~28,3, atleta de elite</li>
                  <li>La Liga Mexicana de Beisbol (LMB): tradicion desde 1925</li>
                </ul>
              </div>
            </div>
          </div>

          {/* El deporte como cultura en Latinoamerica */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">El deporte como cultura en Latinoamerica y Espana</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                El deporte en el mundo hispanohablante no es solo actividad fisica: es <strong>identidad cultural</strong>. Cada disciplina moldea tipos corporales distintos que el IMC no puede categorizar correctamente. Entender esta diversidad es clave para no dejarse enganar por un simple numero.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="border border-border rounded-xl p-5">
                  <h4 className="font-bold text-primary mb-3">Futbol: el deporte mas popular</h4>
                  <p className="text-sm">
                    Desde los potreros de Buenos Aires hasta La Masia de Barcelona, el futbol produce atletas relativamente delgados con piernas potentes. Sin embargo, la evolucion del futbol moderno hacia un juego mas fisico ha aumentado el IMC promedio de los jugadores. Los datos del <strong>CIES Football Observatory</strong> muestran que los defensas centrales de La Liga tienen un IMC promedio de 24,8, rozando el "sobrepeso". El futbol mexicano (Liga MX) y argentino (Primera Division) presentan perfiles similares.
                  </p>
                </div>
                <div className="border border-border rounded-xl p-5">
                  <h4 className="font-bold text-primary mb-3">Beisbol caribeno: bateadores de potencia</h4>
                  <p className="text-sm">
                    En <strong>Republica Dominicana</strong>, <strong>Cuba</strong> y <strong>Venezuela</strong>, el beisbol es religion. Los sluggers (bateadores de potencia) desarrollan una musculatura masiva en tren superior y core. El 30% de los jugadores de la MLB son latinos, y muchos tienen IMC superiores a 27. Las academias de beisbol del Caribe producen atletas cuya composicion corporal no encaja en las tablas estandar del IMC.
                  </p>
                </div>
                <div className="border border-border rounded-xl p-5">
                  <h4 className="font-bold text-primary mb-3">Lucha libre mexicana: tipos corporales unicos</h4>
                  <p className="text-sm">
                    La <strong>lucha libre</strong> es un fenomeno cultural unico de Mexico. A diferencia del wrestling olimpico, los luchadores profesionales presentan una enorme variedad de tipos corporales: desde voladores acrobaticos con IMC de 23 hasta pesados como <strong>Psycho Clown</strong> o los legendarios <strong>tecnicos</strong> con IMC superiores a 30. El IMC es completamente inadecuado para evaluar a estos atletas que combinan fuerza, acrobacia y resistencia.
                  </p>
                </div>
                <div className="border border-border rounded-xl p-5">
                  <h4 className="font-bold text-primary mb-3">Espana: DXA en vez de IMC en el deporte de elite</h4>
                  <p className="text-sm">
                    Los servicios medicos del <strong>Real Madrid</strong> y del <strong>FC Barcelona</strong> no utilizan el IMC para evaluar a sus jugadores. En su lugar, emplean la <strong>absorciometria de rayos X de doble energia (DXA)</strong>, que mide con precision la masa grasa, la masa muscular y la densidad osea. La <strong>FEMEDE</strong> recomienda esta tecnologia como estandar para deportistas espanoles de alto rendimiento. En America Latina, centros como el <strong>CENARD</strong> en Argentina y el <strong>COM</strong> en Mexico estan adoptando protocolos similares.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Alternatives */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-success/10">
                <Target className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-2xl font-display font-bold">Alternativas al IMC para deportistas: recomendaciones de la FEMEDE</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              La <strong>FEMEDE</strong> y las asociaciones de medicina deportiva de America Latina recomiendan estas alternativas al IMC para evaluar la composicion corporal de atletas.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">Porcentaje de masa grasa</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Medida directa de la grasa corporal. Usado por los cuerpos medicos de la Liga MX, La Liga y los equipos nacionales.
                </p>
                <p className="text-xs">
                  <strong>Hombre deportista:</strong> 6-15%<br />
                  <strong>Mujer deportista:</strong> 14-22%<br />
                  <strong>Futbolista elite:</strong> 8-12%
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">FFMI (Fat-Free Mass Index)</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Indice de masa libre de grasa. Recomendado por la FEMEDE para detectar dopaje y evaluar el desarrollo muscular natural.
                </p>
                <p className="text-xs">
                  <strong>Natural:</strong> 18-25<br />
                  <strong>Elite natural:</strong> 24-26<br />
                  <strong>Sospecha de dopaje:</strong> &gt;26
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">DXA (Absorciometria de rayos X)</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  El estandar de oro. Usado por el Real Madrid, FC Barcelona, la seleccion argentina y el CENARD.
                </p>
                <p className="text-xs">
                  <strong>Precision:</strong> 1-2% de error<br />
                  <strong>Mide:</strong> grasa, musculo, hueso<br />
                  <strong>Disponible en:</strong> FEMEDE, CENARD, COM
                </p>
              </div>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Activity className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">IMC y deporte en America Latina y Espana: lo que hay que recordar</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                El <strong>calculo IMC deportista</strong> es enganoso para millones de atletas hispanohablantes. Ya practiques <strong>futbol</strong> en la Liga MX o La Liga, <strong>boxeo</strong> en la tradicion mexicana, <strong>rugby</strong> con Los Pumas o <strong>beisbol</strong> en la Serie del Caribe, tu <strong>IMC atleta</strong> probablemente estara sobrevalorado por la masa muscular.
              </p>
              <p>
                La <strong>FEMEDE</strong> (Federacion Espanola de Medicina del Deporte) y las asociaciones de medicina del deporte de <strong>Mexico (FMMD)</strong>, <strong>Argentina (AMMDEP)</strong> y <strong>Colombia</strong> desaconsejan el uso exclusivo del IMC en deportistas. La evidencia cientifica muestra que un <strong>IMC de 26-28 en un futbolista profesional</strong> no indica sobrepeso sino desarrollo muscular optimo.
              </p>
              <p>
                Para deportistas latinos y espanoles, el <strong>porcentaje de masa grasa</strong>, el <strong>FFMI</strong> (Fat-Free Mass Index) y la <strong>absorciometria DXA</strong> son alternativas recomendadas. Instituciones como el <strong>CENARD</strong> en Argentina, el <strong>COM</strong> (Centro Olimpico Mexicano) y los centros FEMEDE en Espana ofrecen estas evaluaciones especializadas para atletas de alto rendimiento.
              </p>
              <p>
                Si eres un <strong>deportista aficionado</strong> en America Latina o Espana y tu IMC supera 25, no te alarmes. Consulta con un medico deportivo que pueda evaluar tu <strong>composicion corporal real</strong> mediante bioimpedancia o pliegues cutaneos, metodos accesibles en la mayoria de los centros deportivos y gimnasios de la region.
              </p>
            </div>
          </div>

          {/* Link back to main page */}
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/es/imc" className="glass-card p-6 hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Scale className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold">Calculadora IMC</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Calcula tu Indice de Masa Corporal con valores de referencia para America Latina y Espana
              </p>
            </Link>

            <Link to="/es/tabla-imc" className="glass-card p-6 hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold">Tabla IMC</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Consulta la tabla completa de categorias IMC de la OMS adaptada al contexto hispanohablante
              </p>
            </Link>

            <Link to="/es/limitaciones-imc" className="glass-card p-6 hover:border-orange-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-orange-500/10">
                  <AlertTriangle className="w-5 h-5 text-orange-500" />
                </div>
                <h3 className="font-bold">Limitaciones del IMC</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Todas las limitaciones del IMC explicadas: deportistas, edad, etnia y mas
              </p>
            </Link>
          </div>
        </div>


        <RelatedPages />

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>&copy; 2024 Calculadora IMC Deportista - Herramienta informativa unicamente</p>
        </footer>
      </div>
    </div>
  );
};

export default IMCDeportista;
