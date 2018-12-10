var tempDescricao = "";

angular.module("cadastroProduto", ["ngMessages"]);
angular.module("cadastroProduto").controller("cadastroProdutoCtrl", function ($scope) {
	$scope.app = "Cadastro de Produtos";
	
	$scope.produto = {codigo: "", produto: "", altura: "", largura: "",
						profundidade: "", descricao:[]};

	$scope.produtos = [{codigo: "11111", produto: "Produto 1", altura: "10", largura: "10",
						profundidade: "10", descricao:["Descrição 1", "Descrição 2"]}];
	
	$scope.adicionarProduto = function (produto) {

		if(!$scope.verificarDuplicidade(produto.codigo)){
			$scope.produtos.push(angular.copy(produto));
			delete $scope.produto;
		}
		else{

			// mensagem aqui
		}
	}

	$scope.verificarDuplicidade = function (pCodigo) {
		var lResult =  false;

		$scope.produtos.forEach(function(item){
			if (item.codigo == pCodigo) {
				// mensagem aqui
				//$scope.listaForm.inputName.$setValidity("duplicado", true);
				lResult = true;
	            throw StopIteration;
			}
		});
  
		return lResult;   
	}

	$scope.adicionarDescricao = function (tmpDescricao) {
		$scope.produto.descricao.push(tmpDescricao);
		delete $scope.tmpDescricao;
	}
});