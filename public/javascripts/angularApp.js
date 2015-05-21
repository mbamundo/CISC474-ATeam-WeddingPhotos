var app = angular.module('selfie', ['ui.router']);

app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider){
	
	$stateProvider
		.state('upload', {
			url: '/upload',
			templateUrl: '/upload.html',
			controller: 'UploadCtrl'
		})
		
		.state('show', {
			url: '/show',
			templateUrl: '/show.html',
			controller: 'ShowCtrl'
		});
		
	$urlRouterProvider.otherwise('upload');
}]);

app.factory('pictures', [function(){
	var o = {
		pictures: []
	}
	
	o.upload = function(file){
		
	}
	
	return o;
}])

app.factory('allPics', [function() {
	var o = {
		allPics : []
	}
	return o;
}])

app.controller('UploadCtrl', [
'$scope',
'pictures',
'$filter',
function($scope, pictures, $filter){
	$scope.pictures = pictures.pictures;
	
	$scope.addPic = function(){
		if(!$scope.name || $scope.name === ""){ return; }
		
		var fileInput = document.getElementById('fileInput');
		
		if(fileInput.files[0] == null) { return; }
		
		var file = fileInput.files[0];
		var imageType = /image.*/;
		/*
		$scope.picture = {name: $scope.name};
		
		if (file.type.match(imageType)) {
			var reader = new FileReader();
			reader.onload = function(e) {
				fileDisplayArea.innerHTML = "";
				var img = new Image();
				img.src = reader.result;
				fileDisplayArea.appendChild(img);
			}
			reader.readAsDataURL(file);	
		} else {
			fileDisplayArea.innerHTML = "File not supported!"
		}
		*/
		
		$scope.pictures.push({
			name: $scope.name,
			picture: '/uploads/' + file.name
		});
		
		document.getElementById('checkUpload').className = "hidden";
		document.getElementById('confirmUpload').className = "hidden";
	};	
	/*
	$scope.removeName = function() {
		console.log('delete');
		$scope.pictures = $filter('filter')($scope.pictures, { name: !$scope.name });
	}
	*/
}]);

app.controller('ShowCtrl', [
'$scope',
'pictures',
function($scope, pictures){
	$scope.pictures = pictures.pictures;
	
}]);