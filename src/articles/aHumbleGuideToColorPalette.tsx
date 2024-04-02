import ArticleWrapper from "@/components/articleWrapper";
import colorCirle from "@/assets/images/colorCircle.png";
import ArticleTextCard from "@/components/articleTextCard";

const AHumbleGuideToColorPalette = () => {
  return (
    <ArticleWrapper date="01/04/2024">
      <h1 className="pb-10 font-bold text-4xl">
        Um Humilde Guia Sobre{" "}
        <span className="text-cyan-600 dark:text-purple-600">
          Paleta de Cores
        </span>
      </h1>

      <section className="space-y-4 text-justify">
        <p>
          Quando vou começar algum projeto, pessoal ou não, uma das coisas que
          sempre passo um bom tempo pensando são as cores que vou utilizar.
        </p>

        <p>
          Costumo gastar alguns bons minutos em sites como{" "}
          <a
            target="_blank"
            className="underline text-cyan-500 dark:text-purple-500"
            href=""
          >
            Coolors
          </a>
          ,{" "}
          <a
            target="_blank"
            className="underline text-cyan-500 dark:text-purple-500"
            href=""
          >
            Adobe Colors
          </a>{" "}
          ou{" "}
          <a
            target="_blank"
            className="underline text-cyan-500 dark:text-purple-500"
            href=""
          >
            Color Hunt
          </a>{" "}
          procurando ou gerando cores aleatórias até achar alguma que represente
          o que estou desejando criar. Mas, conforme o projeto vai tomando
          forma, sinto que falta aquele toque de exclusividade e originalidade.
        </p>

        <p>
          Então decido parar um pouco e criar uma paleta de cores única
          utilizando alguns passo-a-passos e conceitos que aprendi nessa humilde
          e breve vida.
        </p>

        <p>
          Hoje vamos <b>criar</b> a Paleta de Cores de uma simples Landing Page.
          Mas primeiro: o que pensar antes de escolher as nossas queridas cores?
        </p>
      </section>

      <section className="space-y-4 text-justify pt-10 flex flex-col">
        <h2 className="text-2xl font-bold text-cyan-500 dark:text-purple-500 text-left">
          Psicologia das Cores
        </h2>

        <p>
          Assim como notas em uma escala musical, as cores tem o poder de passar
          determinadas emoções e influenciar boa parte dos nossos pensamentos e
          comportamentos.
        </p>

        <p>
          O <span className="text-red-500 font-bold">vermelho</span>, por
          exemplo, associado à paixão e à energia, tem a particularidade de
          transmitir sensações como perigo e desejo, enquanto o{" "}
          <span className="text-cyan-500 font-bold">azul</span>, ligado à calma
          e à serenidade, transmite paz e tranquilidade.
        </p>

        <ArticleTextCard type="info">
          Frequentemente na cultura pop a Psicologia das Cores é utilizada para
          "manipular" o que sentimos. Talvez uma das obras mais famosas que se
          utiliza disso é a linda, maravilhosa e perfeita série{" "}
          <a
            className="underline"
            target="_blank"
            href="https://www.imdb.com/title/tt0903747/"
          >
            Breaking Bad
          </a>
          . Você pode ler mais sobre isso{" "}
          <a
            className="underline"
            href="https://geekpopnews.com.br/breaking-bad-e-a-quimica-das-cores/"
            target="_blank"
          >
            aqui
          </a>
          .
        </ArticleTextCard>

        <p>
          Assim, as cores podem ser usadas estrategicamente para criar
          diferentes atmosferas e comunicar mensagens específicas nas nossas
          aplicações.
        </p>
      </section>

      <section className="space-y-4 text-justify pt-10 flex flex-col">
        <h2 className="text-2xl font-bold text-cyan-500 dark:text-purple-500 text-left ">
          Círculo Cromático
        </h2>

        <p>
          Uma ferramenta fundamental para qualquer ser que lida com cores, seja
          com pintura, decoração, moda ou, no meu caso, web design, é o Círculo
          Cromático. Ele é uma simples representação gráfica das cores,
          organizada de forma a mostrar as relações entre elas.
        </p>

        <img
          className="w-52 self-center py-2"
          src={colorCirle}
          alt="Circulo Cromático"
        />

        <p>Ele é composto por 12 cores principais:</p>

        <ul className="text-left list-outside list-square">
          <li>
            3 Cores primárias:{" "}
            <span className="text-red-500 font-bold">Vermelho</span>,{" "}
            <span className="text-blue-500 font-bold">Azul</span> e{" "}
            <span className="text-yellow-500 font-bold">Amarelo</span>.
          </li>
          <li>
            3 Cores Secundárias:{" "}
            <span className="text-green-500 font-bold">Verde</span>,{" "}
            <span className="text-orange-500 font-bold">Laranja</span> e{" "}
            <span className="text-purple-500 font-bold">Roxo</span>
          </li>
          <li>
            6 Cores Terciárias:{" "}
            <span className="text-amber-500 font-bold">Amarelo-alaranjado</span>
            ,{" "}
            <span className="text-rose-500 font-bold">Vermelho-alaranjado</span>
            ,{" "}
            <span className="text-fuchsia-500 font-bold">Vermelho-púrpura</span>
            , <span className="text-violet-500 font-bold">Azul-púrpura</span>,{" "}
            <span className="text-teal-500 font-bold">Azul-esverdeado</span> e{" "}
            <span className="text-lime-500 font-bold">Amarelo-esverdeado</span>
          </li>
        </ul>

        <ArticleTextCard type="info">
          Não vou me desdobrar sobre o motivo de serem primárias, secundarias e
          terciárias. Mas, se interessar, você pode ler mais sobre{" "}
          <a
            className="underline"
            target="_blank"
            href="https://www.vivadecora.com.br/pro/cores-primarias/"
          >
            aqui
          </a>
        </ArticleTextCard>
        <p>
          Então chega aquela pergunta:{" "}
          <i className="font-bold">
            "Como que eu, um simples mortal, vou usar esse carinha?".
          </i>{" "}
          Bom, vamos lá:
        </p>

        <h3 className="text-lg font-bold text-left">
          Identificando Cores Complementares
        </h3>

        <p>
          As cores que estão opostas no Circulo Cromático são as que chamamos de
          Complementares. Quando colocadas lado a lado, elas criam um forte
          contraste, o que pode ser usado para destacar elementos importantes da
          nossa aplicação.
        </p>

        <div className="flex flex-row justify-around">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row gap-1 md:gap-4 justify-center">
              <div className="size-10 bg-red-500 border-2 rounded-md border-red-400 dark:border-red-900"></div>
              <div className="size-10 bg-green-500 border-2 rounded-md border-green-400 dark:border-green-900"></div>
            </div>
            <span className="font-light text-xs">ex. 1</span>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row gap-1 md:gap-4 justify-center">
              <div className="size-10 bg-blue-500 border-2 rounded-md border-blue-400 dark:border-blue-900"></div>
              <div className="size-10 bg-orange-500 border-2 rounded-md border-orange-400 dark:border-orange-900"></div>
            </div>
            <span className="font-light text-xs">ex. 2</span>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row gap-1 md:gap-4 justify-center">
              <div className="size-10 bg-yellow-500 border-2 rounded-md border-yellow-400 dark:border-yellow-900"></div>
              <div className="size-10 bg-purple-500 border-2 rounded-md border-purple-400 dark:border-purple-900"></div>
            </div>
            <span className="font-light text-xs">ex. 3</span>
          </div>
        </div>

        <h3 className="text-lg font-bold text-left">
          Cores Complementares Decompostas
        </h3>

        <p>
          Uma variação das Cores Complementares é a Tríade, formalmente chamada
          de Cores Complementares Decompostas. Em vez de usar duas cores que
          estão diretamente em lados opostos do círculo cromático, as cores
          complementares decompostas usam três cores que estão igualmente
          espaçadas no círculo cromático.
        </p>

        <div className="flex flex-row justify-around">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row gap-1 md:gap-4 justify-center">
              <div className="size-10 bg-lime-500 border-2 rounded-md border-lime-400 dark:border-lime-900"></div>
              <div className="size-10 bg-violet-500 border-2 rounded-md border-violet-400 dark:border-violet-900"></div>
              <div className="size-10 bg-orange-500 border-2 rounded-md border-orange-400 dark:border-orange-900"></div>
            </div>
            <span className="font-light text-xs">ex. 1</span>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row gap-1 md:gap-4 justify-center">
              <div className="size-10 bg-sky-500 border-2 rounded-md border-sky-400 dark:border-sky-900"></div>
              <div className="size-10 bg-fuchsia-500 border-2 rounded-md border-fuchsia-400 dark:border-fuchsia-900"></div>
              <div className="size-10 bg-yellow-500 border-2 rounded-md border-yellow-400 dark:border-yellow-900"></div>
            </div>
            <span className="font-light text-xs">ex. 2</span>
          </div>
        </div>

        <h3 className="text-lg font-bold text-left">Cores Análogas</h3>

        <p>
          Cores análogas são cores que estão lado a lado no círculo cromático.
          Elas são cores que se harmonizam naturalmente, criando um visual suave
          e elegante.
        </p>

        <div className="flex flex-row justify-around">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row gap-1 md:gap-4 justify-center">
              <div className="size-10 bg-red-500 border-2 rounded-md border-red-400 dark:border-red-900"></div>
              <div className="size-10 bg-amber-500 border-2 rounded-md border-amber-400 dark:border-amber-900"></div>
            </div>
            <span className="font-light text-xs">ex. 1</span>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row gap-1 md:gap-4 justify-center">
              <div className="size-10 bg-indigo-500 border-2 rounded-md border-indigo-400 dark:border-indigo-900"></div>
              <div className="size-10 bg-purple-500 border-2 rounded-md border-purple-400 dark:border-purple-900"></div>
              <div className="size-10 bg-fuchsia-500 border-2 rounded-md border-fuchsia-400 dark:border-fuchsia-900"></div>
            </div>
            <span className="font-light text-xs">ex. 2</span>
          </div>
        </div>
      </section>

      <section className="space-y-4 text-justify pt-10 flex flex-col">
        <h2 className="text-2xl font-bold text-cyan-500 dark:text-purple-500">
          Propriedades das Cores
        </h2>

        <p>
          Nós, humildes humanos, percebemos as cores como um conjunto de
          aspectos:{" "}
          <b className="text-cyan-500 dark:text-purple-500 font-bold">Matiz</b>,{" "}
          <b className="text-cyan-500 dark:text-purple-500 font-bold">Brilho</b>{" "}
          e{" "}
          <b className="text-cyan-500 dark:text-purple-500 font-bold">
            Saturação
          </b>
          .
        </p>

        <p>
          <b>Matiz</b> (HUE) é a característica principal da cor, o que a
          identifica como vermelho, verde, azul, etc.
        </p>

        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row w-full px-4 h-9">
            <div className="bg-orange-500 w-[8.3%]"></div>
            <div className="bg-amber-500 w-[8.3%]"></div>
            <div className="bg-yellow-500 w-[8.3%]"></div>
            <div className="bg-lime-500 w-[8.3%]"></div>
            <div className="bg-green-500 w-[8.3%]"></div>
            <div className="bg-teal-500 w-[8.3%]"></div>
            <div className="bg-sky-500 w-[8.3%]"></div>
            <div className="bg-blue-500 w-[8.3%]"></div>
            <div className="bg-violet-500 w-[8.3%]"></div>
            <div className="bg-purple-500 w-[8.3%]"></div>
            <div className="bg-fuchsia-500 w-[8.3%]"></div>
            <div className="bg-red-500 w-[8.3%]"></div>
          </div>
          <span>- 0 à 360 -</span>
        </div>

        <ArticleTextCard type="info">
          A Matiz é determinada pelo comprimento de onda da luz que incide sobre
          a retina. Me desculpe por ser nerd. 🤓
        </ArticleTextCard>

        <p>
          <b>Brilho</b> é a intensidade da luz refletida por uma superfície. Uma
          cor com alto brilho é percebida como clara, enquanto uma cor com baixo
          brilho é percebida como escura. Simples e direto.
        </p>

        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row w-full px-4 h-9">
            <div className="bg-gray-950 w-[9%]"></div>
            <div className="bg-gray-900 w-[9%]"></div>
            <div className="bg-gray-800 w-[9%]"></div>
            <div className="bg-gray-700 w-[9%]"></div>
            <div className="bg-gray-600 w-[9%]"></div>
            <div className="bg-gray-500 w-[9%]"></div>
            <div className="bg-gray-400 w-[9%]"></div>
            <div className="bg-gray-300 w-[9%]"></div>
            <div className="bg-gray-200 w-[9%]"></div>
            <div className="bg-gray-100 w-[9%]"></div>
            <div className="bg-gray-50 w-[9%]"></div>
          </div>
          <span>- 0 à 100 -</span>
        </div>

        <p>
          <b>Saturação</b> é a pureza da cor, ou seja, o quanto ela se aproxima
          da cor pura do espectro visível. Uma cor com alta saturação é
          percebida como viva e intensa, enquanto uma cor com baixa saturação é
          percebida como pálida, sem vida, coxa e capenga.
        </p>

        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row w-full px-4 h-9">
            <div className="bg-[#FFFFFF] w-[9%]"></div>
            <div className="bg-[#ffe5e5] w-[9%]"></div>
            <div className="bg-[#FFCCCC] w-[9%]"></div>
            <div className="bg-[#FFB2B2] w-[9%]"></div>
            <div className="bg-[#FF9999] w-[9%]"></div>
            <div className="bg-[#FF8080] w-[9%]"></div>
            <div className="bg-[#FF6666] w-[9%]"></div>
            <div className="bg-[#FF4D4D] w-[9%]"></div>
            <div className="bg-[#FF3333] w-[9%]"></div>
            <div className="bg-[#FF1A1A] w-[9%]"></div>
            <div className="bg-[#FF0000] w-[9%]"></div>
          </div>
          <span>- 0 à 100 -</span>
        </div>

        <p>
          A combinação dessas três propriedades define a aparência de qualquer
          cor.
        </p>
      </section>

      <section className="font-bold flex justify-center text-5xl pt-6">
        Em Contrução...
      </section>
    </ArticleWrapper>
  );
};

export default AHumbleGuideToColorPalette;
