$(document).on('click', '.bx-soa .licence_block label.license', function(){
                    var id = $(this).data('for');
                    $('.bx-soa .licence_block label.error').addClass('hidden');
                    
                    if(!$('input[name='+id+']').prop('checked')){
                      $('input[name='+id+']').prop('checked', 'checked');
                      BX.Sale.OrderAjaxComponent.state_licence = 'checked';
                    }
                    else{
                      $('input[name='+id+']').prop('checked', '');
                      BX.Sale.OrderAjaxComponent.state_licence = '';
                    }
});

$(document).ready(function() {
  var show = false;
  $('.bx-soa-section-content').on('click','.step_next', function(e) {
      e.preventDefault();
      let current = $(this),
      next = $(this).parents('.bx-soa-section').next('.bx-soa-section').find('.bx-soa-section-content');  
      let content = current.parents('.bx-soa-section-content');
      if ( next.find('.step_next').length || next.find('.step_prev').length){
          show = false;
          content.slideUp(350, "linear");
          next.slideDown(350, "linear");
          next.find('.step_prev').show();
      }else {
        if (show) {
          content.slideUp(350, "linear");
          next.slideDown(350, "linear");
         
        }
        content.slideUp(350, "linear");
        next.slideDown(350, "linear");
        next.find('.step_wrap').prepend('<div class="step_next"> <button class="btn btn-default"> Далее </button></div></div>')
        next.find('.step_wrap').prepend('<div class="step_prev"> <button class="btn btn-default"> Назад </button></div></div>')
        if ($(this).parents('.bx-soa-section').next('.bx-soa-section').attr('id') == 'bx-soa-basket'){
          next.find('.step_prev').show();
          next.find('.step_next').hide();
        }else{
          next.find('.step_prev').show();
          next.find('.step_next').show();
        }
      } 
  });

  $('.bx-soa-section-content').on('click', '.step_prev', function (e) {
      e.preventDefault();
      let prev = $(this).parents('.bx-soa-section').prev('.bx-soa-section').find('.bx-soa-section-content');
      let content = $(this).parents('.bx-soa-section-content');
      if ($(this).parents('.bx-soa-section').attr('id') == 'bx-soa-basket'){
          $(this).hide();
          prev.slideDown(350, "linear");
      }else{
          prev.slideDown(350, "linear");
          content.slideUp(350, "linear");
      }
  });
});
