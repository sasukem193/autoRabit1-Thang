({
	doInit : function(component, event, helper) {
		var pdf = new jsPDF();
        var canvas = pdf.canvas;
        canvas.height = 72 * 11;
        canvas.width= 72 * 8.5;;

        // can also be document.body
        var text = document.getElementById('prinpdf');
		pdf.text(20, 20, 'prinpdf');
        pdf.save('Test.pdf');

	}
})