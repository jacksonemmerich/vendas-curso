import { use, useState } from "react";
import { Layout, Input } from "components";

export const CadastroProdutos: React.FC = () => {

  const [sku, setSku] = useState<string>('')
  const [preco, setPreco] = useState<string>()
  const [nome, setNome] = useState<string>('')
  const [descricao, setDescricao] = useState<string>('')

  const submit = () => {
    const produto = {
      sku,
      preco,
      nome,
      descricao
    }
    console.log(produto)
  }

  return (
    <Layout titulo="Produtos">
      <div className="columns">
        <Input 
          onChange={setSku} 
          label="SKU: *" 
          columnClass="is-half"
          value={sku}
          id="inputSku"
          placeholder="SKU do produto"
        />
        
        <div className="column">
          <div className="field">
            <label className="label" htmlFor="inputPreco">
              Preço: *
            </label>
            <div className="control">
              <input
                type="text"
                className="input"
                id="inputPreco"
                value={preco}
                onChange={e => setPreco(e.target.value)}
                placeholder="Digite o preco"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="columns">
        <div className="column is-full">
          <div className="field">
            <label className="label" htmlFor="inputNome">
              Nome: *
            </label>
            <div className="control">
              <input
                type="text"
                className="input"
                id="inputNome"
                value={nome}
                onChange={e => setNome(e.target.value)}
                placeholder="Digite o nome do produto"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="columns">
        <div className="column is-full">
          <div className="field">
            <label className="label" htmlFor="inputDesc">
              Descrição: *
            </label>
            <div className="control">
              <textarea
                className="textarea"
                id="inputDesc"
                value={descricao}
                onChange={e => setDescricao(e.target.value)}
                placeholder="Digite a descrição do produto"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button onClick={submit} className="button is-link">Salvar</button>
        </div>
        <div className="control">
          <button className="button is-link is-light">Voltar</button>
        </div>
      </div>
    </Layout>
  );
};
