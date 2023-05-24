const progress = document.querySelector('progress');
const form = document.querySelector('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const request = new XMLHttpRequest();
        request.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
        request.setRequestHeader('Content-Type', 'multipart/form-data');
        request.upload.addEventListener('progress', (e) => {
          const  {loaded, total} = e;
          progress.value = (loaded / total).toFixed(2);
        });
        request.send(new FormData(form));
    });