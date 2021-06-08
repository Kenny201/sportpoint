$("#soa-property-4").mask("+7(999) 999-9999");
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
  $('.bx-soa-section-content').on('click','.step_next', function(e) {
      e.preventDefault();
      let current = $(this),
      currentContent = current.parents('.bx-soa-section').find('.bx-soa-section-content'),
      next = current.parents('.bx-soa-section').next('.bx-soa-section:not("#bx-soa-basket")').find('.bx-soa-section-content'), 
      content = current.parents('.bx-soa-section-content');
      
      if ( next.find('.step_next').length){
          currentContent.find('.step_wrap').show();
      }else {
        next.slideUp(350, "linear");
        next.find('.step_wrap').prepend('<div class="step_next"> <button class="btn btn-default"> Далее </button></div></div>')
        next.slideDown(350, "linear");
        next.find('.step_wrap').show();
        currentContent.find('.step_wrap').hide();
      } 
  });
  
  $('.bx-soa > .bx-soa-section:not("#bx-soa-basket") .bx-soa-section-title-container').click(function(){
    let current = $(this);
    if ( current.parents('.bx-soa-section').find('.step_next').length){
      current.parents('.bx-soa-section').find('.step_wrap').show();
    }else {
      current.parents('.bx-soa-section').find('.step_wrap').prepend('<div class="step_next"> <button class="btn btn-default"> Далее </button></div></div>')
    }
    current.parents('.bx-soa').find('.bx-soa-section:not("#bx-soa-basket")').find('.step_wrap').hide();
    current.parents('.bx-soa-section').find('.step_wrap').show();
    current.parents('.bx-soa-section').find('.bx-soa-section-content').show();
    });
});
