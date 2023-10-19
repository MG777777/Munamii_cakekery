var selector = $("#mc-form"),
    subscribeUrl = selector.attr('action');
selector.ajaxChimp({
  language: 'en',
  url: subscribeUrl,
  callback: mailChimpResponse
});

function mailChimpResponse(resp) {
  if (resp.result === 'success') {
    $('.mailchimp-success').html('' + resp.msg).fadeIn(900);
    $('.mailchimp-error').fadeOut(400);
    $("#mc-form").trigger('reset');
  } else if (resp.result === 'error') {
    $('.mailchimp-error').html('' + resp.msg).fadeIn(900);
  }
}