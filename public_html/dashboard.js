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
        $("#messagesTable").append ("<tr> <th> Sender </th> <th> Receiver </th> <th> Content </th> </tr>");
        $.each (messages, function (index, message) {
          $("#messagesTable").append ("<tr id='" + index + "'><td>" + message.sender + "</td><td>" + message.receiver + "</td><td>" + message.content + "</td></tr>");
        });
      });

      $('#messagesTab').show();
    }
  });

  // Event Listener for Compose Message NavBar Button
  $('#compose').on('click', function () {
    $('.tab:not(#composeTab)').hide();
    $('.table').empty();
    $('#composeTab').show();
  });

  // Event Listener for the close compose message tab
  $('#closeComposeButton').on ('click', function () {
    $('#composeTab').hide();
  });

  // Event Listener for send message button
  $('#send').on ('click', function () {
	  var messageText = $('#messageText').val();
	  var recipient = $('#userRecipient').val();
	  var messageTitle = $('#composeTitle').val();
	  var data = {
		  val: messageText,
		  title: messageTitle,
		  user: recipient
	}
    $.post ('/dashboard/compose/send', data, function (message) {
      console.log (messageText);
      $('#closeComposeButton').trigger('click');
    })
    .fail(function (err) {
      console.log (err);
    });
  });

  // Event Listener for Contacts NavBar button
  $('.contacts').on('click', function () {
    $('.tab:not(#contactsTab)').hide();
    $('.table:not(#contactsTable)').empty();

    if ($('#contactsTab').css('display') == 'none') {
      $.getJSON("/dashboard/contacts", function (contacts) {
        $("#contactsTable").append("<tr> <th> UserName </th> <th> Email </th> <th> Job Title </th> </tr>");
        $.each(contacts, function (index, contact) {
          $("#contactsTable").append("<tr id='" + index + "'><td>" + contact.username + "</td><td>" + contact.email + "</td><td>" + contact.job_title + "</td></tr>");
        });
      });

      $('#contactsTab').show();
    }
  });

  // Event Listener for the close contacts tab
  $('#closeContactsButton').on ('click', function () {
    $('#contactsTab').hide();
  });
});
