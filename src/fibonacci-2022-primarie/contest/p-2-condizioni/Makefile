diagramma.svg: fib-ioi2024-p2.pdf
	pdfcrop $< $<
	pdf2svg $< $@
	rsvg-convert -w 700 -f svg $@ -o $@
