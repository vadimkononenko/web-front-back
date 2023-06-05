// Додавання Datepicker
$(function() {
    $("#datepicker").datepicker();
});

// Додавання Slider
$(function() {
    $("#slider").slider({
        min: 0,
        max: 100,
        slide: function(event, ui) {
            $("#slider-value").text(ui.value);
        }
    });
});

// Додавання Tooltip
$(function() {
    $("#tooltipElem").tooltip();
});



$(document).ready(function() {
    // Отримання посилань на елементи стрілок
    let hourHand = $('.hour-hand');
    let minuteHand = $('.minute-hand');
    let secondHand = $('.second-hand');

    // Встановлення початкового повороту стрілок до поточного часу
    let now = moment();
    let hours = now.hours();
    let minutes = now.minutes();
    let seconds = now.seconds();

    let hourRotation = hours * 30 + minutes / 2;
    let minuteRotation = minutes * 6 + seconds / 10;
    let secondRotation = seconds * 6;

    hourHand.css('transform', 'rotate(' + hourRotation + 'deg)');
    minuteHand.css('transform', 'rotate(' + minuteRotation + 'deg)');
    secondHand.css('transform', 'rotate(' + secondRotation + 'deg)');

    // Оновлення годинника кожну секунду
    setInterval(function() {
        seconds++;

        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }

        if (hours >= 12) {
            hours = 0;
        }

        let hourRotation = hours * 30 + minutes / 2;
        let minuteRotation = minutes * 6 + seconds / 10;
        let secondRotation = seconds * 6;

        hourHand.css('transform', 'rotate(' + hourRotation + 'deg)');
        minuteHand.css('transform', 'rotate(' + minuteRotation + 'deg)');
        secondHand.css('transform', 'rotate(' + secondRotation + 'deg)');
    }, 1000);
});



$(document).ready(function() {
    let iframeWidth = 301;
    let iframeHeight = 120;
    let iframeSrc = 'https://informer.minfin.com.ua/ua/gen/course/?color=violet';
    let iframeStyle = 'width:' + iframeWidth + 'px;height:' + iframeHeight + 'px;overflow:hidden;';
    let iframeCode = '<iframe width="' + iframeWidth + '" height="' + iframeHeight + '" frameborder="0" ' +
        'src="' + iframeSrc + '" vspace="0" scrolling="no" hspace="0" allowtransparency="true" ' +
        'style="' + iframeStyle + '"></iframe>';
    let containerId = 'currency';
    $('#' + containerId).html(iframeCode);
});
