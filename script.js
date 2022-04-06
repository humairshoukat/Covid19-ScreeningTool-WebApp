var answers = [];
    function recordAnswers(qno, ans, nqno) {
        if (nqno!=1) {
            answers[qno] = ans;
        }
        if (nqno > 0) {
            jQuery('.row').removeClass("active");
            jQuery('.q' + nqno).addClass("active");
        }
        else {
            q1 = answers[1];
            q2 = answers[2];
            q3 = answers[3];
            q4 = answers[4];
            q5 = answers[5];
            q6 = answers[6];
            q7 = answers[7];
            q8 = answers[8];
            q9 = answers[9];
            q10 = answers[10];

            if((q1,q2,q4,q6,q8,q9==1) && (q3,q5,q10==1 || 2)) {
                jQuery('.row').removeClass("active");
                jQuery('.result1').addClass("active");
            }
            else if((q1,q2,q4==1) && (q3,q5,q6,q7,q8,q9,q10==1 || 2)) {
                jQuery('.row').removeClass("active");
                jQuery('.result2').addClass("active");
            }
            else {
                jQuery('.row').removeClass("active");
                jQuery('.result3').addClass("active");
            }
        }
}
function closeButton() {
    recordAnswers(0, 0, 1);
}