/* NSLC educational printable: derived from the user-provided 30-name word-search puzzle.
   One-page PDF created entirely in the visitor's browser. No external libraries or tracking. */
(() => {
  "use strict";
  const rows = [
    "CHEYENNETONEIDAD", "YOJAVANJEEHCAPAE", "ANSAEXTEEWLUMZKP", "VIDEFETVFBBGUIPO",
    "AETUNUNNKIYNOAZS", "PEHMIEEWCJIWUKAH", "AJLAJZCOAOAHLKTO", "IEPOPEMALHAXAVOR",
    "WREENAEEBCSLKHKE", "WARKNINGIOMTOOAL", "ICTCOOMROMHPTPDA", "EUHCHRIEQCOAAIWC",
    "HEQSOHEVSESHPYJS", "VFOACHZHQNEUAAUE", "XHDTYXCACHNRMWRM", "SDOWASAKCIHCCGKA"
  ];
  const words = [
    "Chiricahua", "Blackfeet", "Chickasaw", "Mescalero", "Cherokee",
    "Comanche", "Cheyenne", "Muscogee", "Seminole", "Nez Perce",
    "Shoshone", "Arapaho", "Choctaw", "Shawnee", "Yavapai",
    "Apache", "Navajo", "Lakota", "Dakota", "Ojibwe",
    "Mohawk", "Oneida", "Seneca", "Paiute", "Yaqui",
    "Kiowa", "Hopi", "Zuni", "Cree", "Ute"
  ];
  const directions = [
    [-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]
  ];
  const gridX = 136;
  const gridY = 678;
  const step = 21.5;
  const esc = s => s.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
  const num = n => Number(n.toFixed(3)).toString();
  function cell(x, y) {
    return [gridX + x * step, gridY - y * step];
  }
  function locate(w) {
    for (let y=0;y<16;y++) for (let x=0;x<16;x++) {
      for (const [dx,dy] of directions) {
        let ok = true;
        for (let i=0;i<w.length;i++) {
          const xx=x+dx*i, yy=y+dy*i;
          if (xx<0 || xx>15 || yy<0 || yy>15 || rows[yy][xx]!==w[i]) {ok=false;break;}
        }
        if (ok) return {x,y,dx,dy,length:w.length};
      }
    }
    return null;
  }
  function capsule(start, end, radius=8.8) {
    const vx=end[0]-start[0], vy=end[1]-start[1];
    const dist=Math.hypot(vx,vy);
    if (dist<0.1) return "";
    const ux=vx/dist, uy=vy/dist, nx=-uy, ny=ux, k=0.552284749831;
    const p=(x,y)=>num(x)+" "+num(y);
    const a=[start[0]+nx*radius,start[1]+ny*radius];
    const b=[end[0]+nx*radius,end[1]+ny*radius];
    const c=[end[0]+ux*radius,end[1]+uy*radius];
    const d=[end[0]-nx*radius,end[1]-ny*radius];
    const e=[start[0]-nx*radius,start[1]-ny*radius];
    const f=[start[0]-ux*radius,start[1]-uy*radius];
    return [
      p(...a)+" m",p(...b)+" l",
      p(b[0]+ux*k*radius,b[1]+uy*k*radius)+" "+p(c[0]+nx*k*radius,c[1]+ny*k*radius)+" "+p(...c)+" c",
      p(c[0]-nx*k*radius,c[1]-ny*k*radius)+" "+p(d[0]+ux*k*radius,d[1]+uy*k*radius)+" "+p(...d)+" c",
      p(...e)+" l",
      p(e[0]-ux*k*radius,e[1]-uy*k*radius)+" "+p(f[0]-nx*k*radius,f[1]-ny*k*radius)+" "+p(...f)+" c",
      p(f[0]+nx*k*radius,f[1]+ny*k*radius)+" "+p(a[0]-ux*k*radius,a[1]-uy*k*radius)+" "+p(...a)+" c",
      "h S"
    ].join("\n")+"\n";
  }
  function pageContent(showAnswers) {
    const out=[];
    const line=(font,size,x,y,s)=>out.push("BT /"+font+" "+num(size)+" Tf "+num(x)+" "+num(y)+" Td ("+esc(s)+") Tj ET\n");
    out.push("0.11 0.24 0.16 RG 1.1 w 42 40 528 712 re S\n");
    line("F2",19,126,746,showAnswers?"Indigenous Nations - Answer Key":"Indigenous Nations - Word Search");
    line("F1",10,122,722,"Find all 30 names. Words may run across, down or diagonally.");
    line("F1",9,159,705,"A free printable from NDE Sovereign Life Collective");
    out.push("0 0 0 rg\n");
    for(let y=0;y<16;y++)for(let x=0;x<16;x++){
      const p=cell(x,y);
      line("F3",14,p[0]-4.2,p[1]-4.5,rows[y][x]);
    }
    const cols=[86,245,404];
    for(let i=0;i<words.length;i++){
      const col=Math.floor(i/10), row=i%10;
      line("F1",11,cols[col],270-row*19.5,(i+1)+". "+words[i]);
    }
    line("F1",8,67,52,"For personal, family, classroom and noncommercial educational use.");
    if(showAnswers){
      out.push("0.83 0.14 0.14 RG 1.5 w\n");
      for(const word of words){
        const match=locate(word.toUpperCase().replace(/\s+/g,""));
        if (!match) throw new Error("Word missing from source puzzle: "+word);
        const start=cell(match.x,match.y);
        const end=cell(match.x+match.dx*(match.length-1),match.y+match.dy*(match.length-1));
        out.push(capsule(start,end));
      }
    }
    return out.join("");
  }
  function pdfBytes(showAnswers) {
    const stream=pageContent(showAnswers);
    const objects=[
      "<< /Type /Catalog /Pages 2 0 R >>",
      "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
      "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R /F2 5 0 R /F3 6 0 R >> >> /Contents 7 0 R >>",
      "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
      "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
      "<< /Type /Font /Subtype /Type1 /BaseFont /Courier-Bold >>",
      "<< /Length "+stream.length+" >>\nstream\n"+stream+"endstream"
    ];
    let pdf="%PDF-1.4\n";
    const offsets=[0];
    for(let i=0;i<objects.length;i++){
      offsets.push(pdf.length);
      pdf+=(i+1)+" 0 obj\n"+objects[i]+"\nendobj\n";
    }
    const xref=pdf.length;
    pdf+="xref\n0 "+(objects.length+1)+"\n0000000000 65535 f \n";
    for(let i=1;i<offsets.length;i++)pdf+=String(offsets[i]).padStart(10,"0")+" 00000 n \n";
    pdf+="trailer\n<< /Size "+(objects.length+1)+" /Root 1 0 R >>\nstartxref\n"+xref+"\n%%EOF\n";
    return new TextEncoder().encode(pdf);
  }
  function download(showAnswers) {
    const blob=new Blob([pdfBytes(showAnswers)],{type:"application/pdf"});
    const url=URL.createObjectURL(blob);
    const a=document.createElement("a");
    a.href=url;
    a.download=showAnswers?"NSLC-Indigenous-Nations-Answer-Key.pdf":"NSLC-Indigenous-Nations-Word-Search.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(()=>URL.revokeObjectURL(url),120000);
  }
  function showGrid() {
    const grid=document.querySelector("[data-wordsearch-grid]");
    if (!grid) return;
    for (const row of rows) {
      const line=document.createElement("div");
      line.className="wordsearch-line";
      line.textContent=row.split("").join(" ");
      grid.appendChild(line);
    }
  }
  document.addEventListener("DOMContentLoaded",()=>{
    showGrid();
    document.querySelectorAll("[data-pdf-download]").forEach(btn=>{
      btn.addEventListener("click",()=>{
        try { download(btn.dataset.pdfDownload==="answers"); }
        catch (err) {
          console.error(err);
          alert("We couldn't prepare the PDF. Please use your browser's Print option to save the worksheet as a PDF.");
        }
      });
    });
    document.querySelectorAll("[data-print-worksheet]").forEach(btn=>btn.addEventListener("click",()=>window.print()));
  });
})();