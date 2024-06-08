import React from 'react';
import { Head, usePage } from '@inertiajs/react';
import { useForm } from '@inertiajs/react';
import TextInput from '@/Components/Form/TextInput';
import FieldGroup from '@/Components/Form/FieldGroup';
import LoadingButton from '@/Components/Button/LoadingButton';
import FlashMessages from '@/Components/Messages/FlashMessages';

export default function Index() {
  const props = usePage().props;
  console.log(props);
  const { data, setData, errors, post, processing } = useForm({
    total_belanja: ''
  });
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    post(route('calculate.store'));
  }

  const formatRupiah = (angka: any, prefix: any) => {
    var number_string = angka.toString().replace(/[^,\d]/g, ''),
      split = number_string.split(','),
      sisa = split[0].length % 3,
      rupiah = split[0].substr(0, sisa),
      ribuan = split[0].substr(sisa).match(/\d{3}/gi);
    if (ribuan) {
      let separator = '';
      separator = sisa ? '.' : '';
      rupiah += separator + ribuan.join('.');
    }
    rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
    return prefix == undefined ? rupiah : rupiah ? 'Rp. ' + rupiah : '';
  };

  return (
    <React.Fragment>
      <Head title="Dashboard" />
      <Head>
        <link rel="icon" type="image/png" href="/images/logo/favicon.png" />
      </Head>
      <div className="w-full  min-h-screen bg-[#0A58A2]">
        <div className="container mx-auto pt-10">
          <div>
            <img
              src="/images/logo/logo.png"
              width={200}
              className="mx-auto"
            ></img>
          </div>
          <div className="text-white text-center text-2xl font-semibold mt-20 pb-3">
            Masukkan Jumlah Belanja
          </div>

          <form onSubmit={handleSubmit}>
            <div className="w-[50%] mx-auto">
              <FlashMessages></FlashMessages>
              <FieldGroup
                label=""
                name="total_belanja"
                error={errors.total_belanja}
              >
                <TextInput
                  name="total_belanja"
                  type="number"
                  error={errors.total_belanja}
                  value={data.total_belanja}
                  onChange={e => setData('total_belanja', e.target.value)}
                />
              </FieldGroup>
            </div>
            <div className="text-center mt-5 w-full">
              <LoadingButton
                type="submit"
                loading={processing}
                className="text-white mx-auto font-semibold bg-[#2ea11f] text-center hover:bg-[#248217] focus:ring-4
                 focus:ring-[#248217] font-medium rounded-lg text-sm px-5 py-2.5 mb-2 focus:outline-none"
              >
                Tambah
              </LoadingButton>
            </div>
          </form>
          {props.exchange.length > 0 && (
            <React.Fragment>
              <div className="text-center text-white mt-10 font-bold">
                Kemungkinan Pembayaran
              </div>
              <div className="grid grid-cols-3">
                {props.exchange.map((items, index) => (
                  <div>
                    <div className="relative cursor-pointer	 flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                      <div className="p-6">
                        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                          {formatRupiah(items, 'Rp. ')}
                        </h5>
                      </div>
                    </div>
                  </div>
                ))}
                <div>
                  <div className="relative cursor-pointer	 flex flex-col mt-6 text-gray-700 bg-[#d1c519] shadow-md bg-clip-border rounded-xl w-96">
                    <div className="p-6">
                      <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        UANG PAS
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
