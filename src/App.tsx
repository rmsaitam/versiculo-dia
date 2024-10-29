import { useState } from 'react';

interface Versiculo {
  livro: string;
  capitulo: number;
  versiculo: number;
  texto: string;
}

const versiculos: Versiculo[] = [
  { livro: 'Gênesis', capitulo: 1, versiculo: 1, texto: 'No princípio, Deus criou os céus e a terra.' },
  { livro: 'Gênesis', capitulo: 1, versiculo: 2, texto: 'A terra era sem forma e vazia, e as trevas cobriam a face do abismo, e o Espírito de Deus pairava sobre as águas.' },
  { livro: 'João', capitulo: 3, versiculo: 16, texto: 'Porque Deus amou tanto o mundo que deu o seu Filho Unigênito, para que todo aquele que nele crê não se perca, mas tenha a vida eterna.' },
  { livro: 'Romanos', capitulo: 8, versiculo: 28, texto: 'E sabemos que todas as coisas cooperam para o bem daqueles que amam a Deus, daqueles que são chamados segundo o seu propósito.' },
  { livro: 'Filipenses', capitulo: 4, versiculo: 13, texto: 'Posso todas as coisas em Cristo que me fortalece.' },
  { livro: 'Isaías', capitulo: 40, versiculo: 31, texto: 'Mas os que esperam no Senhor renovarão as suas forças, subirão com asas como águias, correrão e não se cansarão, caminharão e não se fatigarão.' },
  { livro: 'Salmo', capitulo: 23, versiculo: 4, texto: 'Ainda que eu ande pelo vale da sombra da morte, não temerei mal algum, porque tu estás comigo; a tua vara e o teu cajado me consolam.' },
  { livro: 'Mateus', capitulo: 11, versiculo: 28, texto: 'Vinde a mim, todos os que estais cansados e sobrecarregados, e eu vos darei descanso.' },
  { livro: 'Jeremias', capitulo: 29, versiculo: 11, texto: 'Porque eu sei os planos que tenho para vocês, diz o Senhor, planos de prosperidade e não de mal, para dar-lhes um futuro e uma esperança.' },
  { livro: '2 Coríntios', capitulo: 5, versiculo: 7, texto: 'Porque andamos pela fé e não pela vista.' },
  { livro: 'Hebreus', capitulo: 11, versiculo: 1, texto: 'Ora, a fé é a substância das coisas que se esperam, a evidência das coisas que não se veem.' },
];

const App = () => {
  const [versiculo, setVersiculo] = useState(versiculos[Math.floor(Math.random() * versiculos.length)]);

  const handleAtualizar = () => {
    setVersiculo(versiculos[Math.floor(Math.random() * versiculos.length)]);
  };

  const handleCompartilhar = () => {
    const textoCompartilhar = `${versiculo.texto} - ${versiculo.livro} ${versiculo.capitulo}:${versiculo.versiculo}`;
    navigator.clipboard.writeText(textoCompartilhar);
    alert('Texto copiado para a área de transferência!');
  };

  return (
    <div className="max-w-md mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
      <h1 className="text-3xl text-gray-900 leading-tight">Versículo do Dia</h1>
      <div className="flex flex-col mt-6">
        <p className="text-lg text-gray-600">{versiculo.texto}</p>
        <p className="text-lg text-gray-600">{versiculo.livro} {versiculo.capitulo}:{versiculo.versiculo}</p>
      </div>
      <div className="flex justify-center mt-6">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" onClick={handleAtualizar}>Atualizar</button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ml-4" onClick={handleCompartilhar}>Compartilhar</button>
      </div>
    </div>
  );
};

export default App;