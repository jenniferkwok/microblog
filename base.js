console.log("Sanity Check: JS is working!");

$(document).ready(function(){

//delete button
$( document ).on( "click", "#delete", function() {
    $(this.parentElement.parentElement).remove();
} ); 

$("#submit").on('click', function(){
	event.preventDefault();
	var newBlogPost = $('#content').val();
	console.log(newBlogPost);
	var deleteButton = '<button id="delete" class="btn btn-danger"><span class="glyphicon glyphicon-minus" aria-hidden="true"></span></button>';
$('#blogContent').append('<div class="panel panel-default"><div class="panel-body">'+ newBlogPost+deleteButton+'</div></div>');

});


});
