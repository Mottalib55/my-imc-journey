import { Header } from "@/components/Header";
import { Baby, AlertTriangle, TrendingUp, BookOpen, Stethoscope, Globe, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { RelatedPages } from "@/components/RelatedPages";

const IMCNino = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container max-w-6xl py-8 px-4 md:py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-500 text-sm font-medium mb-6">
            <Baby className="w-4 h-4" />
            IMC Infantil en Latinoam&eacute;rica y Espa&ntilde;a
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-cyan-500">IMC Ni&ntilde;os y Adolescentes</span> : Calculadora Infantil
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Am&eacute;rica Latina tiene las tasas m&aacute;s altas de obesidad infantil del mundo en desarrollo. M&eacute;xico: 35,6% de ni&ntilde;os con sobrepeso u obesidad (ENSANUT).
          </p>
        </header>

        {/* Medical Warning */}
        <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <Stethoscope className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-destructive mb-2">Consulta m&eacute;dica obligatoria</h3>
              <p className="text-muted-foreground">
                El IMC infantil requiere <strong>interpretaci&oacute;n pedi&aacute;trica profesional</strong>.
                Acuda al <strong>pediatra del IMSS</strong>, su <strong>m&eacute;dico de atenci&oacute;n primaria</strong> o
                el <strong>centro de salud</strong> correspondiente. Las curvas de crecimiento de la OMS deben ser
                evaluadas por un profesional de salud. Esta informaci&oacute;n es puramente orientativa.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Obesity crisis in LatAm and Spain */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <Globe className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Obesidad infantil en Latinoam&eacute;rica y Espa&ntilde;a</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                La regi&oacute;n hispanohablante enfrenta una <strong>crisis de obesidad infantil sin precedentes</strong>.
                La transici&oacute;n nutricional, la urbanizaci&oacute;n acelerada y el acceso masivo a alimentos
                ultraprocesados han transformado el panorama de la salud infantil en Am&eacute;rica Latina y Espa&ntilde;a.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5 text-center">
                <p className="text-3xl font-bold text-destructive mb-2">35,6%</p>
                <p className="text-sm text-muted-foreground">
                  de ni&ntilde;os mexicanos con <strong>sobrepeso u obesidad</strong> seg&uacute;n la ENSANUT (Encuesta Nacional de Salud y Nutrici&oacute;n)
                </p>
              </div>
              <div className="bg-warning/5 border border-warning/20 rounded-xl p-5 text-center">
                <p className="text-3xl font-bold text-warning mb-2">17,3%</p>
                <p className="text-sm text-muted-foreground">
                  de ni&ntilde;os espa&ntilde;oles con <strong>obesidad</strong> seg&uacute;n el estudio ALADINO de la AESAN (Agencia Espa&ntilde;ola de Seguridad Alimentaria)
                </p>
              </div>
              <div className="bg-info/5 border border-info/20 rounded-xl p-5 text-center">
                <p className="text-3xl font-bold text-info mb-2">3,5x</p>
                <p className="text-sm text-muted-foreground">
                  m&aacute;s <strong>publicidad de comida chatarra</strong> dirigida a ni&ntilde;os en Latinoam&eacute;rica comparado con Europa
                </p>
              </div>
            </div>
          </div>

          {/* Growth Curves - LatAm & Spain specific */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <TrendingUp className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Curvas de crecimiento: OMS, CDC y referencias locales</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                La mayor&iacute;a de pa&iacute;ses de <strong>Am&eacute;rica Latina</strong> adoptan las
                <strong> curvas de crecimiento de la OMS</strong> (Organizaci&oacute;n Mundial de la Salud) como referencia
                oficial para evaluar el estado nutricional infantil. Sin embargo, existen diferencias importantes
                seg&uacute;n el pa&iacute;s.
              </p>
              <p>
                <strong>Espa&ntilde;a</strong> ha utilizado hist&oacute;ricamente las <strong>curvas de Orbegozo</strong> y los
                <strong> estudios espa&ntilde;oles de crecimiento</strong>, aunque progresivamente se van incorporando
                las curvas de la OMS. <strong>M&eacute;xico</strong> utiliza tanto las curvas de la <strong>CDC</strong> (Centers
                for Disease Control) como las de la <strong>OMS</strong>, dependiendo del &aacute;mbito cl&iacute;nico.
              </p>

              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold mb-4">Sistema de percentiles en la regi&oacute;n</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong className="text-info">&lt; percentil 3:</strong> Bajo peso o desnutrici&oacute;n</p>
                    <p><strong className="text-success">Percentil 3 a 85:</strong> Peso saludable</p>
                    <p><strong className="text-warning">Percentil 85 a 97:</strong> Sobrepeso</p>
                    <p><strong className="text-destructive">&gt; percentil 97:</strong> Obesidad</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">
                      <strong>Nota importante:</strong> muchos pa&iacute;ses latinoamericanos (Bolivia, Honduras,
                      Guatemala) a&uacute;n no cuentan con <strong>referencias nacionales de crecimiento</strong> propias
                      y dependen exclusivamente de los est&aacute;ndares internacionales de la OMS para evaluar el
                      crecimiento infantil.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Adult vs Child BMI */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <AlertTriangle className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">IMC adulto vs. IMC infantil: gu&iacute;a OPS/OMS</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Seg&uacute;n las directrices de la <strong>OPS (Organizaci&oacute;n Panamericana de la Salud)</strong> y la
                <strong> PAHO</strong>, el IMC en ni&ntilde;os no se interpreta con los mismos umbrales fijos que en
                adultos. El cuerpo infantil est&aacute; en constante desarrollo y el IMC var&iacute;a naturalmente
                seg&uacute;n la edad, el sexo y la etapa de crecimiento.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5">
                <h4 className="font-bold text-destructive mb-2">IMC Adulto (OMS)</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Umbrales fijos universales</li>
                  <li>• &lt;18,5 = bajo peso</li>
                  <li>• 18,5-24,9 = peso normal</li>
                  <li>• 25-29,9 = sobrepeso</li>
                  <li>• &gt;30 = obesidad</li>
                </ul>
              </div>
              <div className="bg-success/5 border border-success/20 rounded-xl p-5">
                <h4 className="font-bold text-success mb-2">IMC Ni&ntilde;o (OPS/OMS)</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Curvas de percentiles OMS o CDC</li>
                  <li>• Var&iacute;a seg&uacute;n edad y sexo</li>
                  <li>• Se usan puntuaciones Z (z-score)</li>
                  <li>• Interpretaci&oacute;n relativa a la poblaci&oacute;n</li>
                  <li>• Seguimiento longitudinal esencial</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Age groups - LatAm specific */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <Baby className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">IMC seg&uacute;n rangos de edad</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-cyan-500 mb-3">Lactante (0-2 a&ntilde;os)</h4>
                <p className="text-sm text-muted-foreground">
                  Se eval&uacute;a con las curvas peso/longitud de la OMS en el <strong>control del ni&ntilde;o sano</strong> de
                  centros de salud y cl&iacute;nicas del IMSS. El per&iacute;metro cef&aacute;lico y el peso para la edad
                  son los indicadores principales. En Espa&ntilde;a, el seguimiento se realiza en atenci&oacute;n
                  primaria con el programa del ni&ntilde;o sano.
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-cyan-500 mb-3">Ni&ntilde;o (2-12 a&ntilde;os)</h4>
                <p className="text-sm text-muted-foreground">
                  El IMC se interpreta con curvas de percentiles. La <strong>ENSANUT</strong> realiza seguimiento
                  poblacional en M&eacute;xico. Los <strong>programas de salud escolar</strong> en muchos pa&iacute;ses
                  latinoamericanos incluyen medici&oacute;n de peso y talla. El rebote de adiposidad (alrededor de los 6
                  a&ntilde;os) requiere vigilancia especial.
                </p>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-cyan-500 mb-3">Adolescente (12-18 a&ntilde;os)</h4>
                <p className="text-sm text-muted-foreground">
                  <strong>Alta prevalencia de sobrepeso</strong>: el 38% de los adolescentes mexicanos presentan
                  sobrepeso u obesidad. La pubertad genera variaciones importantes. Se requieren curvas
                  espec&iacute;ficas por sexo. La presi&oacute;n social y la influencia de la comida r&aacute;pida
                  agravan el problema en esta franja de edad.
                </p>
              </div>
            </div>
          </div>

          {/* La crisis de la comida chatarra */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-warning/10">
                <AlertTriangle className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-display font-bold">La crisis de la comida chatarra</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Am&eacute;rica Latina se ha convertido en el principal campo de batalla contra la
                <strong> comida ultraprocesada</strong> dirigida a ni&ntilde;os. La regi&oacute;n lidera iniciativas
                regulatorias innovadoras a nivel mundial, mientras que Espa&ntilde;a aborda el problema desde
                la prevenci&oacute;n y la educaci&oacute;n nutricional.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-warning mb-3">Etiquetado frontal octogonal</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• <strong>Chile</strong> fue pionero mundial con la Ley de Etiquetado (2016)</li>
                  <li>• <strong>M&eacute;xico</strong> adopt&oacute; sellos de advertencia octogonales en 2020</li>
                  <li>• <strong>Per&uacute;</strong> y <strong>Argentina</strong> implementaron sistemas similares</li>
                  <li>• <strong>Resultado:</strong> 25% de reducci&oacute;n en compra de bebidas azucaradas por ni&ntilde;os en Chile</li>
                </ul>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-warning mb-3">Medidas fiscales y regulatorias</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• <strong>Impuesto al az&uacute;car en M&eacute;xico</strong> (2014): gravamen a bebidas azucaradas</li>
                  <li>• Restricci&oacute;n de marketing de alimentos ultraprocesados dirigido a ni&ntilde;os</li>
                  <li>• <strong>Espa&ntilde;a:</strong> Plan NAOS (Estrategia para la Nutrici&oacute;n, Actividad F&iacute;sica y Prevenci&oacute;n de la Obesidad)</li>
                  <li>• Prohibici&oacute;n de venta de comida chatarra en escuelas (varios pa&iacute;ses de LatAm)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* When to consult - local health systems */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-destructive/10">
                <Stethoscope className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-display font-bold">&iquest;Cu&aacute;ndo consultar al pediatra?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-warning/5 border border-warning/20 rounded-xl p-5">
                <h4 className="font-bold text-warning mb-3">Se&ntilde;ales de alerta (curvas OMS)</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Cambio brusco de carril en la curva de crecimiento</li>
                  <li>• IMC por encima del percentil 85 (sobrepeso) o 97 (obesidad)</li>
                  <li>• IMC por debajo del percentil 3 (desnutrici&oacute;n)</li>
                  <li>• Rebote de adiposidad precoz (antes de los 6 a&ntilde;os)</li>
                  <li>• Ganancia r&aacute;pida de peso en corto per&iacute;odo</li>
                  <li>• Preocupaci&oacute;n del ni&ntilde;o por su imagen corporal</li>
                </ul>
              </div>
              <div className="bg-success/5 border border-success/20 rounded-xl p-5">
                <h4 className="font-bold text-success mb-3">D&oacute;nde acudir</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• <strong>M&eacute;xico:</strong> IMSS, cl&iacute;nica de medicina familiar, control del ni&ntilde;o sano</li>
                  <li>• <strong>Espa&ntilde;a:</strong> pediatra de atenci&oacute;n primaria, programa del ni&ntilde;o sano</li>
                  <li>• <strong>Argentina:</strong> centro de atenci&oacute;n primaria de salud (CAPS)</li>
                  <li>• <strong>Colombia:</strong> IPS, programa de crecimiento y desarrollo</li>
                  <li>• Llevar la cartilla o carnet de salud del ni&ntilde;o con las curvas OMS</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Prevention programs */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <Users className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Programas de prevenci&oacute;n</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                Los gobiernos de la regi&oacute;n han implementado <strong>pol&iacute;ticas p&uacute;blicas innovadoras</strong> para
                combatir la obesidad infantil, convirtiendo a Latinoam&eacute;rica en referente mundial en regulaci&oacute;n
                alimentaria.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-cyan-500 mb-3">Latinoam&eacute;rica</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• <strong>Chile:</strong> Ley de Etiquetado (modelo mundial), prohibici&oacute;n de publicidad y venta de chatarra en escuelas</li>
                  <li>• <strong>M&eacute;xico:</strong> Jornadas Nacionales de Salud, Programa de Acci&oacute;n Espec&iacute;fico para la Prevenci&oacute;n del Sobrepeso y Obesidad</li>
                  <li>• <strong>Comedores escolares:</strong> regulaci&oacute;n de men&uacute;s en escuelas p&uacute;blicas de M&eacute;xico, Chile, Brasil y Colombia</li>
                  <li>• <strong>OPS/PAHO:</strong> Plan de acci&oacute;n regional para la prevenci&oacute;n de la obesidad en la ni&ntilde;ez</li>
                </ul>
              </div>
              <div className="border border-border rounded-xl p-5">
                <h4 className="font-bold text-cyan-500 mb-3">Espa&ntilde;a</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• <strong>Plan NAOS:</strong> Estrategia para la Nutrici&oacute;n, Actividad F&iacute;sica y Prevenci&oacute;n de la Obesidad (desde 2005)</li>
                  <li>• <strong>Programa THAO:</strong> intervenci&oacute;n comunitaria en m&aacute;s de 100 municipios espa&ntilde;oles</li>
                  <li>• <strong>Estudio ALADINO:</strong> vigilancia epidemiol&oacute;gica peri&oacute;dica de la AESAN sobre obesidad infantil</li>
                  <li>• <strong>Comedores escolares:</strong> regulaci&oacute;n de men&uacute;s con supervisi&oacute;n de nutricionistas en centros educativos</li>
                </ul>
              </div>
            </div>
          </div>

          {/* SEO Content */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyan-500/10">
                <BookOpen className="w-6 h-6 text-cyan-500" />
              </div>
              <h2 className="text-2xl font-display font-bold">Gu&iacute;a completa del IMC infantil en el mundo hispanohablante</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                El <strong>c&aacute;lculo del IMC ni&ntilde;o</strong> utiliza la misma f&oacute;rmula que en adultos
                (peso en kg / talla en metros al cuadrado), pero la <strong>interpretaci&oacute;n del IMC infantil</strong> es
                completamente distinta. Las <strong>curvas de crecimiento de la OMS</strong>, adoptadas por la
                <strong> OPS/PAHO</strong> para toda Am&eacute;rica Latina, son la herramienta de referencia.
              </p>
              <p>
                La <strong>ENSANUT</strong> (Encuesta Nacional de Salud y Nutrici&oacute;n) de M&eacute;xico es una de las
                fuentes de datos m&aacute;s completas sobre <strong>obesidad infantil en Latinoam&eacute;rica</strong>.
                En Espa&ntilde;a, la <strong>AESAN</strong> (Agencia Espa&ntilde;ola de Seguridad Alimentaria y
                Nutrici&oacute;n) realiza el <strong>estudio ALADINO</strong> que monitorea el sobrepeso y la obesidad
                en ni&ntilde;os espa&ntilde;oles.
              </p>
              <p>
                Para evaluar el <strong>IMC beb&eacute;</strong> o <strong>IMC lactante</strong>, los pediatras
                utilizan las curvas peso/longitud de la OMS. A partir de los 2 a&ntilde;os, el
                <strong> IMC ni&ntilde;o 3 a&ntilde;os</strong>, <strong>IMC ni&ntilde;o 5 a&ntilde;os</strong> o
                <strong> IMC ni&ntilde;o 10 a&ntilde;os</strong> se interpreta siempre con las curvas de percentiles,
                considerando las <strong>curvas de crecimiento OMS</strong> como est&aacute;ndar en la regi&oacute;n.
              </p>
              <p>
                El seguimiento del <strong>peso ideal ni&ntilde;o</strong> debe realizarse en el marco del
                <strong> control del ni&ntilde;o sano</strong>, ya sea en el IMSS (M&eacute;xico), en atenci&oacute;n
                primaria (Espa&ntilde;a) o en los centros de salud de cada pa&iacute;s. Ante cualquier duda sobre la
                <strong> curva de corpulencia</strong> de su hijo, consulte con su pediatra.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">&iquest;Es usted adulto?</h3>
            <p className="text-muted-foreground mb-6">
              Use nuestra calculadora IMC est&aacute;ndar para adultos
            </p>
            <Link
              to="/es/imc"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Calcular mi IMC adulto
            </Link>
          </div>
        </div>


        <RelatedPages />

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>&copy; 2024 Calculadora IMC Ni&ntilde;o - Herramienta informativa &uacute;nicamente</p>
        </footer>
      </div>
    </div>
  );
};

export default IMCNino;
