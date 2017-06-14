var selectCount = 0;
var totalPhotos = 0;

$('.grid_cell').click(function(e){
  e.preventDefault();
  if($('.grid').hasClass('s_selectionmode')){
    $(this).toggleClass('s_cell-selected').promise().done(function(){
      if ($(this).hasClass('s_cell-selected')){
        selectCount++;
        populateCount(selectCount);
        checkSelectionState(selectCount);
      } else {
        selectCount--;
        populateCount(selectCount);
        checkSelectionState(selectCount);
      }
    });
  } else {
    $('.countcontrol').addClass('s_selectioncontrols');
    $('.grid').addClass('s_selectionmode');
    $(this).addClass('s_cell-selected');
    $('.grid_cell').each(function(){
      $(this).addClass('s_cell-selectable');
    });
    selectCount++;
    populateCount(selectCount);
  }
});

$('#selectall').click(function(){
  $('.grid_cell').each(function(){
    $(this).addClass('s_cell-selected');
  });
  selectCount = totalPhotos;
  populateCount(selectCount);
  checkSelectionState(selectCount);
});

$('#deselectall').click(function(){
  $('.grid_cell').each(function(){
    if($(this).hasClass('s_cell-selected')){
      $(this).removeClass('s_cell-selected');
    }
  });
  selectCount = 0;
  populateCount(selectCount);
  checkSelectionState(selectCount);
});

function checkSelectionState(count){
  if(count == 0){
    $('.countcontrol').removeClass('s_selectioncontrols');
    $('.grid').removeClass('s_selectionmode');
    $('.grid_cell').each(function(){
      $(this).removeClass('s_cell-selectable');
    });
  } else {
    $('.countcontrol').addClass('s_selectioncontrols');
    $('.grid').addClass('s_selectionmode');
    $('.grid_cell').each(function(){
      $(this).addClass('s_cell-selectable');
    });
  }
}

function populateCount(count){
  $('#count').text(count.toString());
}

function setTotalPhotos(){
  $('.grid_cell').each(function(){
    totalPhotos++;
  });
}

$(document).ready(function(){
  setTotalPhotos();
});
