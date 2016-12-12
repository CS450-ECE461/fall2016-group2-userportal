// registers all event listeners and logic for the user portal dashboard
$(document).ready(function () {
  // initialize the dashboard with none of the tabs showing
  $('#contactsTab').hide();
  $('#composeTab').hide();
  $('#messagesTab').hide();

  // Event Listener for Home NavBar Button
  $('#home').on('click', function () {
    $('.tab').hide();
    $('#homeTab').show();
    $('.table').empty();
    
    $.getJSON("/dashboard/userInfo", function (userInfo) {
		$('#userName').html("Username: " + userInfo.username);
		$('#userEmail').html("Email: " + userInfo.email);
		$('#userTitle').html("Title: " +userInfo.job_title);
		$('#homeTitle').html("Profile Info");
    });
    
    $('#homeTab').show();
  });

  // Event Listener for Message NavBar Button
  $('#messages').on('click', function () {
    // Hides all tabs that are not the message tab
    $('.tab:not(#messagesTab)').hide();

    // Empties all of the tables that are not the messages table
    $('.table:not(#messagesTable)').empty();

    // if the message tab is not currently displayed fetch the data and display it
    if ($('#messagesTab').css('display') == 'none') {
      $.getJSON("/dashboard/messages", function (messages) {
        $("#messagesTable").append ("<thead><tr><th> Sender </th><th> Receiver </th><th> Content </th></tr></thead>");
        $.each (messages, function (index, message) {
          $("#messagesTable").append ("<tr id='" + index + "'><td>" + message.sender_email + "</td><td>" + message.receiver_email + "</td><td>" + message.content + "</td></tr>");
        });
      });

      $('#messagesTab').show();
    }
  });

  // Event Listener for send message button
  $('#send').on ('click', function () {
    $.post ('/dashboard/compose/send', {}, function (message) {
      $('.close').trigger ('click');
    })
    .fail(function (err) {
      console.log (err);
    });
    $('.close').trigger ('click');
  });

  // Event Listener for Contacts NavBar button
  $('.contacts').on('click', function () {
    // empty the tables before loading the new data
    $('#contactsTable').empty();

    $.getJSON("/dashboard/contacts", function (contacts) {
      $("#contactsTable").append("<thead><tr><th> Username </th><th> Email </th><th> Job Title </th></tr></thead>");
      $.each(contacts, function (index, contact) {
        $("#contactsTable").append("<tr id='" + index + "'><td>" + contact.username + "</td><td>" + contact.email + "</td><td>" + contact.job_title + "</td></tr>");
      });
    });
  });
});
