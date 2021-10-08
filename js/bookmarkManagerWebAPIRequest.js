
//const baseURL = 'http://localhost:5000/api/bookmarks';
const baseURL = "https://iced-buttoned-toad.glitch.me/api/bookmarks";

function webAPI_getbookmarksCheck(qstring, callBack) {
    $.ajax({
        url: baseURL + qstring,
        type: 'GET',
        contentType: 'text/plain',
        data: {},
        success: bookmarks => {
            console.log("webAPI_getbookmarksCheck - NameFound");
            callBack(true)
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("webAPI_getbookmarksCheck - NameNotFound");
            callBack(false)
        }
    });

}
function webAPI_getbookmarks(successCallBack, qstring, errorCallBack) {
    if (qstring === '') {
        $.ajax({
            url: baseURL,
            type: 'GET',
            contentType: 'text/plain',
            data: {},
            success: bookmarks => {
                successCallBack(bookmarks);
                console.log("webAPI_getbookmarks - success");
            },
            error: function (jqXHR, textStatus, errorThrown) {
                errorCallBack(errorThrown);
                console.log("webAPI_getbookmarks - error");
            }
        });
    }
    else {
        $.ajax({
            url: baseURL + qstring,
            type: 'GET',
            contentType: 'text/plain',
            data: {},
            success: bookmarks => {
                ``
                successCallBack(bookmarks);
                console.log("webAPI_getbookmarks - success");
            },
            error: function (jqXHR, textStatus, errorThrown) {
                errorCallBack(errorThrown);
                console.log("webAPI_getbookmarks - error");
            }
        });
    }
}
function webAPI_getbookmark(id, successCallBack, errorCallBack) {
    $.ajax({
        url: baseURL + "/" + id,
        type: 'GET',
        contentType: 'text/plain',
        data: {},
        success: bookmark => { successCallBack(bookmark); console.log("webAPI_getbookmark - success"); },
        error: function (jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_getbookmark - error");
        }
    });
}
function webAPI_addbookmark(bookmark, successCallBack, errorCallBack) {
    console.log('add', bookmark)
    $.ajax({
        url: baseURL,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(bookmark),
        success: () => { successCallBack(); console.log("webAPI_addbookmark - success"); },
        error: function (jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_addbookmark - error");
        }
    });
}
function webAPI_modifybookmark(bookmark, successCallBack, errorCallBack) {
    console.log('modify', bookmark)
    $.ajax({
        url: baseURL,
        type: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify(bookmark),
        success: () => { successCallBack(); console.log("webAPI_modifybookmark - success"); },
        error: function (jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_modifybookmark - error");
        }
    });
}

function webAPI_deletebookmark(id, successCallBack, errorCallBack) {
    $.ajax({
        url: baseURL + "/" + id,
        contentType: 'text/plain',
        type: 'DELETE',
        success: () => { successCallBack(); console.log("webAPI_deletebookmark - success"); },
        error: function (jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_deletebookmark - error");
        }
    });
}