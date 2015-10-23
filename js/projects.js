function addProjectSlidesShow(p, numOfImgs) {
    console.log("p: " + p);
    var tn = "";
    tn += '<td colspan="2"><ul class="slides">';
    for (img = 1; img <= numOfImgs; img++) { 
        
        tn += '<input type="radio" name="radio-btn" id=' + p + '-img-' + img.toString();

        if (img == 1) tn += ' checked/>';
        else tn += ' />'
        tn +=  '<li class="slide-container"><div class="slide"><img src="img/' + p + '-' + img.toString() + '.png" /></div>'+
               '<div class="nav">';

        if (img == 1) {
            console.log(img +"=1" );
            tn += '<label for='+ p + '-img-' + numOfImgs +' class="prev">&#x2039;</label>'+
                            '<label for='+ p + '-img-' + (img+1).toString() +' class="next">&#x203a;</label>';
        }
        else if (img == numOfImgs) {
        console.log(img +"=numOfImgs" );
            tn += '<label for='+ p + '-img-' + (img-1).toString() +' class="prev">&#x2039;</label>'+
                            '<label for='+ p + '-img-' + '1' +' class="next">&#x203a;</label>';
        } else {
        console.log(img +"else" );
            tn += '<label for='+ p + '-img-' + (img-1).toString() +' class="prev">&#x2039;</label>'+
                            '<label for='+ p + '-img-' + (img+1).toString() +' class="next">&#x203a;</label>';
        }

        tn += "</div></li>"; 
    }
    
    tn += '<li class="nav-dots">';
    
    for (img = 1; img <= numOfImgs; img++) { 
        tn += '<label for=' + p + '-img-' + img + ' class="nav-dot" id=' + p + '-img-dot-' + img + '></label>';
    }

    tn += '</li></ul></td>';
    console.log(tn);
    $("#"+p).empty();
    $("#"+p).append(tn);
}

$(document).ready(function() {
    // addProjectSlidesShow('ru6', 3);
    // addProjectSlidesShow('bouras', 3);

    function getChildren($row) {
        var children = [];
        while($row.next().hasClass('child')) {
             children.push($row.next());
             $row = $row.next();
        }            
        return children;
    }        

    // close all children by default
    $('.child').toggle();

    // on click gallery
    $('.parent').on('click', function() {
        $('.child').fadeOut();
        var children = getChildren($(this));
        $.each(children, function() {
            addProjectSlidesShow($(this).attr('id'), parseInt($(this).attr('numOfImgs')));
            $(this).toggle();
        })
    });
});


