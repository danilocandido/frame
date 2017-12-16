class ListaNegociacoes {

  constructor(){
    this._negociacoes = [];
  }

  adiciona(negociacao) {
    this._negociacoes.push(negociacao);
  }

  get negociacoes(){
    //Programação defenciva - evita a pessoa usar push.
    // negociacoes.push(negociacao) isso não vai mudar a lista original
    // o objetivo é fazer com que só se utilize o método adiciona()
    return [].concat(this._negociacoes);
  }
}
