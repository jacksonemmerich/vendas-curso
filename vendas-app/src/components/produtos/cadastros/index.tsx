import { use, useState } from "react";
import { Layout, Input, TextArea } from "components";

export const CadastroProdutos: React.FC = () => {
  const [sku, setSku] = useState<string>("");
  const [preco, setPreco] = useState<string>();
  const [nome, setNome] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");

  const submit = () => {
    const produto = {
      sku,
      preco,
      nome,
      descricao,
    };
    console.log(produto);
  };

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

        <Input
          onChange={setPreco}
          label="Preço: *"
          columnClass="is-half"
          value={preco}
          id="inputPreco"
          placeholder="Preço do produto"
        />
      </div>

      <div className="columns">
        <Input
          onChange={setNome}
          label="Nome : *"
          columnClass="is-full"
          value={nome}
          id="inputNome"
          placeholder="Nome do produto"
        />
      </div>

      <div className="columns">
        <TextArea
          onChange={setDescricao}
          label="Descrição: *"
          columnClass="is-full "
          value={descricao}
          id="inputDesc"
          placeholder="Descrição do produto"
          rows={4}
        />
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button onClick={submit} className="button is-link">
            Salvar
          </button>
        </div>
        <div className="control">
          <button className="button is-link is-light">Voltar</button>
        </div>
      </div>
    </Layout>
  );
};
